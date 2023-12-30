import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logreg } from '../Logreg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private logregService: Logreg, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const userData = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };

      this.logregService.loginUser(userData).subscribe(
        response => {
          // Si la connexion réussit, vous pouvez gérer la réponse ici
          alert('Connexion réussi !'); // Affiche une alerte de succès
          console.log(response);
          // Par exemple, redirigez l'utilisateur vers une autre page
          this.router.navigate(['/home']);
        },
        error => {
          // Si la connexion échoue, vous pouvez gérer l'erreur ici
          console.error(error);
          alert('Connexion échoué, réesayer'); // Affiche une alerte de succès
          this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
        }
      );
    }
  }

  // Fonction pour rediriger vers la page "register"
  redirectToRegisterPage() {
    this.router.navigate(['/register']);
  }
}
