import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taller1',
  standalone: true,
  imports: [FormsModule,
    CommonModule,],
  templateUrl: './taller1.component.html',
  styleUrl: './taller1.component.css'
})
export class Taller1Component {
  @Input() numero = '';
  
  verificarNumero: boolean | undefined;
  verificarCapicua() {
    if (this.numero.length >= 2) {
      const numeroReverso = this.numero.split('').reverse().join('');
      this.verificarNumero = this.numero === numeroReverso;
    } else {
      this.verificarNumero = false;
    }
  }

}


