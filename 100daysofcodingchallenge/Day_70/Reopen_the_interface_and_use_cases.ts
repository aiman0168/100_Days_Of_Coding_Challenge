interface Settings {
    readonly theme: boolean;
    font: string;
}
//reopening the interface 
interface Setting {
    sidebar: boolean;
}

//Reopening the Contact page interface
interface Setting {
    external: boolean;
}

// Create an object 'userSettings' that adheres to the merged 'Settings' interface
interface userSettings {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true,
};