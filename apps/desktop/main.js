const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    const port = process.env.PORT_WEB || 3001;

    // Next.js 앱 로드 (개발용)
    win.loadURL(`http://localhost:${port}`); // apps/web이 dev로 실행 중일 때
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
