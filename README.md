# Initiative Tracker

A digital initiative tracker designed to streamline the combat phase for game masters. This tool is especially useful for tracking initiative and conditions in the 5th edition of Dungeons and Dragons (DnD) and the 7th edition of Call of Cthulu (CoC).

## Features

### User Feedback: Toast messages provide real-time feedback for operations such as:

- Adding a character
- Changing a character's attack style
- Removing a character
- Adding a condition
- Removing a condition
- Conditions expiring
- Toast messages for user feedback

### Custom Conditions: Users can define and manage their own custom conditions.

### Styled Interface: Utilizes daisyUI and Tailwind CSS for a clean and responsive user interface.

## Hosted Version

You can access the hosted version of the application at [RF-INIT](https://rf-init.vercel.app/).

## Running the App Locally

To run a local copy of the initiative tracker, follow these steps:

```
git clone https://github.com/GeorgeSiougles/rf-init.git
```

Navigate to the Project Directory:

```
cd rf-init
```

Install Dependencies:

Make sure you have Node.js installed on your machine. Then run:

```
npm install
```

Start the Development Server:

```
npm run dev
```

Access the Application:

Open your browser and go to `http://localhost:5173/`

## Usage

Once the application is running, you can perform the following actions:

- Pick between the supported rulesets, currently 5th Edition DnD and 7th Edition CoC
- Add a Character: Click the "Add Character" button and fill in the required details.
- Change Attack Style: Modify a character's attack style by selecting from the available options.
- Remove a Character: Remove a character from the tracker by clicking the "Remove" button.
- Manage Conditions: Add, remove, or let conditions expire. Custom conditions can also be created to suit your campaign's needs.
- Handle the end of turn to update the user with toast messages

## Technologies Used

### Frontend:

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)

### Backend:

- Node.js (for development purposes)

## Contributing

Contributions are welcome! If you have suggestions or bug reports, please open an issue or submit a pull request.
