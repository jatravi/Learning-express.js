import express from 'express'
const App = express();

App.use(express.static('dist'))

// App.get('/', (req, res) => {
//     res.send("Hello");
// });

App.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "name": "Programmer's Coffee",
            "joke": "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            "id": 2,
            "name": "Binary Joke",
            "joke": "There are only 10 types of people in the world: those who understand binary and those who don’t."
        },
        {
            "id": 3,
            "name": "Hardware Humor",
            "joke": "Why did the computer get cold? Because it left its Windows open."
        },
        {
            "id": 4,
            "name": "Tech Support",
            "joke": "How many programmers does it take to change a light bulb? None, that’s a hardware problem."
        },
        {
            "id": 5,
            "name": "Stack Overflow",
            "joke": "I told my computer I needed a break, and it said: 'Why not try Stack Overflow?'"
        }
    ];

    res.send(jokes);
})

const port = process.env.PORT || 3000;

App.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});
