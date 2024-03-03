import React, { useState } from "react";
import { About, Footer, Skills, Work, Certificates} from "./container";
import Header from "./container/Header/Header";
import { Navbar } from "./components";
import "./App.scss";
import { images } from "./constants";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
	{
		id: '0',
		message: 'Hey Geek!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, {
		id: '1',

		// This message appears in
		// the bot chat bubble
		message: 'Please write your username',
		trigger: '2'
	}, {
		id: '2',

		// Here we want the user
		// to enter input
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: " hi {previousValue}, how can I help you?",
		trigger: 4
	}, {
		id: '4',
		options: [
			
			// When we need to show a number of
			// options to choose we create alist
			// like this
			{ value: 1, label: 'View Courses' },
			{ value: 2, label: 'Read Articles' },

		],
		end: true
	}
];

// Creating our own theme
const theme = {
	background: '#a2a4a4',
	headerBgColor: '#373737',
	headerFontSize: '20px',
	botBubbleColor: '#0055d5',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#0055d5',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "img.png",
	floating: true,
};

const App = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") == null ? "dark" : localStorage.getItem("mode")
  );
  const handleChangeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
  };
  return (
    <div className={mode}>
      <div className="app">
        <Navbar onChange={handleChangeMode} mode={mode} />
        <Header circle={mode === "dark" ? images.circle : images.circleWhite} />
        <About />
        <Work />
        <Skills />
        <Certificates/>
        <Footer />
        <ThemeProvider theme={theme}>
				<ChatBot
					// This appears as the header
					// text for the chat bot
					headerTitle="FunBot"
					steps={steps}
					{...config}

				/>
			  </ThemeProvider>
      </div>
    </div>
  );
};

export default App;
