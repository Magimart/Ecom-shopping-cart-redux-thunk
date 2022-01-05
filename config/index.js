import mongoose from 'mongoose';

//______________________mongoose connection option 2
export async function dbConnect(){

  if(mongoose.connection.readyState >= 1) return;
      return await mongoose.connect(process.env.DATABASE_CLOUD, {
        useNewUrlParser: true,
        useUnifiedTopology: true,  
        useCreateIndex: true   
  }).then(pass => console.log('db was connected successfully'))
};




