console.log("hello");
/* npx sequelize-cli model:generate --name User --attributes email:string,password:string,name:string,role:integer,avatar:string,phont:integer,created_at:date,updated_at:date
npx sequelize-cli model:generate --name Category --attributes name:string,image:text
npx sequelize-cli model:generate --name Brand --attributes name:string,image:text
npx sequelize-cli model:generate --name News --attributes title:string,image:text,content:text
npx sequelize-cli model:generate --name Banner --attributes name:string,image:text,status:integer


npx sequelize-cli model:generate --name Order --attributes user_id:integer,status:integer,note:text,total:integer
npx sequelize-cli model:generate --name Product --attributes name:string,image:text,price:integer,oldprice:integer,description:text,specification:text,buyturn:integer,quanity:integer,brand_id:integer,category_id:integer


npx sequelize-cli model:generate --name News_detail --attributes product_id:integer,news_id:integer
npx sequelize-cli model:generate --name Banner_detail --attributes product_id:integer,banner_id:integer

npx sequelize-cli model:generate --name Order_detail --attributes product_id:integer,order_id:integer,price:integer,quanity:integer

npx sequelize-cli model:generate --name Feedback --attributes product_id:integer,user_id:integer,star:integer,content:text


*/
