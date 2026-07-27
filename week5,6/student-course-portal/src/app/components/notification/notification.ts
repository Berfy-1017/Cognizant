import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',

  // Component-level provider creates a new NotificationService
  // instance for this component and its child components.
  providers: [NotificationService]
})
export class Notification {

  constructor(
    public notificationService: NotificationService
  ) {

    this.notificationService.setMessage(
      'Welcome to the Student Course Portal!'
    );

  }

}