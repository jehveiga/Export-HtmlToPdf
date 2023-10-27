const btnGenerate = document.querySelector("#btn_generate_Pdf");

btnGenerate.addEventListener("click", () => {

  // Conteúdo do PDF
  const content = document.querySelector("#divTabela")

  // configuração do arquivo final de PDF
  const options = {
    margin: [10, 10, 10, 10],
    filename: "arquivo.pdf",
    html2canvas: {scale: 2},
    jsPDF: {unit: "mm", format: "a4", orientation: "landscape"}
  }

  //Gerar e baixar para PDF
  html2pdf().set(options).from(content).save();

})
