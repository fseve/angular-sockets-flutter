import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../../interfaces/users/users';
import { WebSocketService } from '../../services/web-socket/web-socket.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  public users: Users[] = [];

  constructor(private httpClient: HttpClient,
              private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.escucharUsuariosSocket();
    this.obtenerUsuarios();
  }

  ngOnDestroy(): void {
  }

  private escucharUsuariosSocket(): void {
    this.webSocketService.listen('create-user').subscribe((user: Users) => {
      this.users.push(user);
    });
  }

  private obtenerUsuarios(): void {
    this.httpClient.get('http://localhost:3000/api/user').subscribe((users: Users[]) => {
      this.users = users;
    });
  }

}
