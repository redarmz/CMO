import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logreg } from '../Logreg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private logregService: Logreg, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { password, confirmPassword } = this.registerForm.value;
      if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
      }

      const userData = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
      };

      this.logregService.registerUser(userData).subscribe(
        response => {
          // Si l'inscription réussit, vous pouvez gérer la réponse ici
          alert('Inscription réussi !'); // Affiche une alerte de succès
          console.log(response);
          // Par exemple, redirigez l'utilisateur vers une autre page
          this.router.navigate(['/home']);
        },
        error => {
          // Si l'inscription échoue, vous pouvez gérer l'erreur ici
          alert('Erreur dans l inscription, veuillez réesayer'); // Affiche une alerte de succès
          console.error(error);
          this.errorMessage = 'Erreur lors de l\'inscription.';
        }
      );
    }
  }

  // Fonction pour rediriger vers la page "login"
  redirectToLoginPage() {
    this.router.navigate(['/login']);
  }
}
