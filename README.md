Étape pour récupérer le projet :

1) cloner le dépot distant :
  $ git clone https://github.com/Anargyres/node-app.git

2) Installer les dépendances :
  $cd node-app
  $ npm install

3) Executer et déployer sur heroku :
  $ heroku login
  $ heroku create
  $ git push heroku master
  $ heroku open
