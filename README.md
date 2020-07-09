# todoアプリ
## 機能
  リストの追加、削除、ユーザー登録
## 本番環境
  https://sample-2046a.firebaseapp.com/signin<br>
  test account: 
  test@gmail.com<br>
  password: testtest
## 制作理由
  javascript,node.jsの克服、railsAPIserver学習、firebaseの学習のために制作
## 使用技術
  vuetify vue.js<br>
  apiserver: rails heroku<br>
  webserver: nuxt firebase<br>
  database postgre<br>
  firebae heroku<br>
## table
users_table
|id  |name  |uid |email |
|---|---|---|---|
|int  |string  |string  |string |

todos_table
|id |title |user_id|
|---|---|---|
|int|string|refernes|
