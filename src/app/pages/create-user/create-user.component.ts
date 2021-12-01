import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../../interfaces/users/users';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public nombres: string;
  public apellidos: string;
  public edad: number;
  public genero: boolean;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    const user: Users = {
      nombre: this.nombres,
      apellido: this.apellidos,
      edad: this.edad,
      sexo: this.genero
    };

    this.httpClient.post('http://localhost:3000/api/user', user).subscribe((res: any) => {
      console.log('Usuario creado:', res);
    });
  }

}
