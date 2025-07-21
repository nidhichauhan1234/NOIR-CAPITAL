import app from './app';
import { connectDB } from './utils/db';

type Server = ReturnType<typeof app.listen>;

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
