const express = ('express');
const faker = ('faker');

const app = express();
const port = 3000;

app.get('/random-users', (req, res) => {
  const numberOfUsers = 5; // Number of random users to generate

  const randomUsers = [];

  for (let i = 0; i < numberOfUsers; i++) {
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
    };

    randomUsers.push(user);
  }

  res.json(randomUsers);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
