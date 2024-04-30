import { Component } from '@angular/core';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrl: './main-profile.component.scss'
})
export class MainProfileComponent {
  // copyText(id: string) {
  //   const text = document.getElementById(id)?.textContent;
  //   if (text) {
  //     navigator.clipboard.writeText(text)
  //   }
  // }


  // mostrarMensagemCopy(event: MouseEvent) {
  //   const button = event.currentTarget as HTMLElement;
  //   const mensagemCopy = button.querySelector('.mensagem-copy') as HTMLElement;
  //   if (mensagemCopy) {
  //     mensagemCopy.style.display = 'block';
  //   }
  // }

  // ocultarMensagemCopy() {
  //   const mensagensCopy = document.querySelectorAll('.mensagem-copy');
  //   mensagensCopy.forEach(mensagem => {
  //     const mensagemElement = mensagem as HTMLElement;
  //     mensagemElement.style.display = 'none';
  //   });
  // }

  copyText(id: string) {
    const text = document.getElementById(id)?.textContent;
    if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.mostrarMensagemCopy(id);
          setTimeout(() => this.ocultarMensagemCopy(id), 1000);
        })
    }
  }
  
  mostrarMensagemCopy(id: string) {
    const mensagemCopy = document.getElementById(`${id}-copy`) as HTMLElement;
    if (mensagemCopy) {
      mensagemCopy.style.display = 'block';
    }
  }
  
  ocultarMensagemCopy(id: string) {
    const mensagemCopy = document.getElementById(`${id}-copy`) as HTMLElement;
    if (mensagemCopy) {
      mensagemCopy.style.display = 'none';
    }
  }

  downloadPDF() {
    const pdf = '../../../assets/pdfs/CV.pdf'
    const file = 'Mateus_Suzuki_CV.pdf'

    const link = document.createElement('a');
    link.href = pdf;
    link.download = file;

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
 
}


