import { Project } from "../interface/project.interface";

export class Projects {
  projects:Project[] = [
      {img: "./assets/image/projetoValorant.jpg", 
      title: "Projeto Valorant", 
      description:"Uma wiki do jogo Valorant consumindo uma API externa da própria empresa, nele utilizei o Angular e Boostrap", 
      class:"backPurple"},
      {img: "./assets/image/projetoCrud.jpg", 
      title: "Crud", 
      description:"Um simples crud com paginação e ordenação feita com Angular e MySql", 
      class:"backBlue"},
  ]
}