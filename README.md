# todoアプリ
## 機能
  リストの追加、削除、ユーザー登録
## demo
https://github.com/masaki-michida/todo-web/wiki/images/todo_demo.gif
## 本番環境
  https://sample-2046a.firebaseapp.com/signin<br>
  test account: 
  test@gmail.com<br>
  password: testtest
## 制作背景
  マルチタスクの時に次のタスクを覚えつつ目の前のタスクをこなしていると、覚えておくことにリソースを取られて目の前のタスクに集中しにくい問題。
## 制作理由
  タスクを一時的にアプリケーションで一覧保存してかつ簡単に削除できるようにすることで解決。
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
