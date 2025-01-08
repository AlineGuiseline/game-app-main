import { jsPDF } from "jspdf";

export async function generatePDF(firstName, lastName, registerNumber, responses) {
    const imageUrl = "Certificado-jpeg.jpg"
    try {
        const imageResponse = await fetch(imageUrl);
        if (!imageResponse.ok) {
            console.error('Erro ao carregar a imagem:', imageResponse.statusText);
            return;
        }
    
        const imageBlob = await imageResponse.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
    
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        // Carregar o arquivo TTF como uma string binária
        const font1Url = "florentine-script.ttf";
        const font2Url = "roboto-regular.ttf";        
        const font3Url = "roboto-serif.ttf";


        const font1BinaryString = await loadFontAsBinaryString(font1Url);
        const font2BinaryString = await loadFontAsBinaryString(font2Url);
        const font3BinaryString = await loadFontAsBinaryString(font3Url);

        // Adicionar as fontes ao jsPDF
        doc.addFileToVFS("florentine-script.ttf", font1BinaryString);
        doc.addFont("florentine-script.ttf", "florentine-script", "normal");

        doc.addFileToVFS("roboto-regular.ttf", font2BinaryString);
        doc.addFont("roboto-regular.ttf", "roboto-regular", "normal");

        doc.addFileToVFS("roboto-serif.ttf", font3BinaryString);
        doc.addFont("roboto-serif.ttf", "roboto-serif", "normal");

        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();
    
        const img = new Image();
        img.src = imageObjectURL;
        
        img.onload = function() {
            
            doc.addImage(img, 'JPEG', 0, 0, width, height);

            function formatedDate() {
                const mesesBR = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                const day = new Date().getDate().toString().padStart(2, '0');
                const month = new Date().getMonth();
                const formatedMonth = mesesBR[month]
                const year = new Date().getFullYear();

                return `${day} de ${formatedMonth} de ${year}`
            }
            
            // Usar a fonte personalizada para o nome completo
            const fullName = `${firstName} ${lastName}`; 
            const register = `RA: ${registerNumber}`; 
            const text = `Pela participação no Game de Proficiência - Interpretação, acertando ${responses}% das questões.`;
            const currentHour = new Date().getHours().toString().padStart(2, '0');
            const currentMinute = new Date().getMinutes().toString().padStart(2, '0');
            const data_emissao = formatedDate()
            const date = `${data_emissao} às ${currentHour}:${currentMinute}`;

            doc.setFontSize(55); // Tamanho da fonte para o nome completo
            doc.setTextColor(0, 0, 0);
            // Usar a fonte personalizada para o nome completo
            doc.setFont('florentine-script');
            let fullNameLines = doc.splitTextToSize(fullName, width - 40); // 40 é um padding
            let fullNameHeight = fullNameLines.length * 28; // Ajuste para calcular a altura ocupada pelo texto 20
            let fullNameY = (height - fullNameHeight) / 2; // Centralizar verticalmente
    
            fullNameLines.forEach(line => {
                const lineX = (width - doc.getTextWidth(line)) / 2;
                doc.text(line, lineX, fullNameY);
                fullNameY += 20; // Espaçamento entre linhas
            });

            // Usar a fonte padrão para o restante do texto
            doc.setFont('roboto-regular');
            doc.setFontSize(16);
            doc.setTextColor(0, 0, 0);
            const registerWidth = doc.getTextWidth(register);
            const registerX = (width - registerWidth) / 2;
            const registerY = fullNameY - 8; // Espaçamento após o nome
            doc.text(register, registerX, registerY);
            
            doc.setFont('roboto-serif');
            doc.setFontSize(17);
            doc.setTextColor(0, 0, 0);
            const textWidth = doc.getTextWidth(text);
            const textX = (width - textWidth) / 2;
            // const textY = height / 2 + 12;
            const textY = registerY + 20;
            doc.text(text, textX, textY);
    
            doc.setFont('roboto-serif');
            doc.setFontSize(17);
            doc.setTextColor(0, 0, 0);
            const dateWidth = doc.getTextWidth(date);
            const dateX = (width - dateWidth) / 2;
            const dateY = textY + 20;
            doc.text(date, dateX, dateY);
    
            doc.save(`Certificado Interpretação - ${firstName}.pdf`);
        };
        
        img.onerror = function() {
            console.error('Erro ao carregar a imagem.');
        };
    } catch (error) {
        console.error('Erro ao gerar o PDF:', error);
    }
}

async function loadFontAsBinaryString(fontUrl) {
    const response = await fetch(fontUrl);
    if (!response.ok) {
        throw new Error(`Falha ao carregar o arquivo de fonte ${fontUrl}`);
    }
    const fontArrayBuffer = await response.arrayBuffer();
    const fontUint8Array = new Uint8Array(fontArrayBuffer);
    let binaryString = "";
    fontUint8Array.forEach((byte) => {
        binaryString += String.fromCharCode(byte);
    });
    return binaryString;
}
