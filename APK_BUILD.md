# Jarvis AI Assistant - APK Build Guide

## Download Pre-built APK

**Latest Release:** [jarvis-mobile-app-1.0.0.apk](https://github.com/farjikamkeliye-source/jarvis-ai-assistant/releases/download/v1.0.0/jarvis-mobile-app-1.0.0.apk)

### Installation Instructions

1. Download the APK file from the link above
2. Enable "Install from unknown sources" in your Android settings:
   - Settings → Security → Unknown sources (ON)
3. Open the APK file and tap "Install"
4. Launch "Jarvis" from your app drawer

---

## Build Your Own APK

### Prerequisites

- Node.js 16+ installed
- Expo CLI: `npm install -g expo-cli`
- EAS CLI for building: `npm install -g eas-cli`
- Expo account (free): https://expo.dev

### Step 1: Setup Project

```bash
cd mobile-app
npm install
```

### Step 2: Login to Expo

```bash
eas login
```

Enter your Expo credentials.

### Step 3: Build APK

```bash
eas build --platform android --local
```

Or for cloud build (recommended):

```bash
eas build --platform android
```

The build will take 5-10 minutes. You'll get a download link when done.

### Step 4: Download & Install

1. Download the APK from the provided link
2. Enable "Install from unknown sources" in Android settings
3. Open the APK and install

---

## Configure Backend Connection

Edit `mobile-app/App.js` to point to your backend:

```javascript
const BACKEND_URL = 'http://your-server-ip:8000';

const response = await fetch(`${BACKEND_URL}/api/chat`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message }),
});
```

---

## Build Desktop App

### For Windows/Mac/Linux Executable

```bash
cd desktop-app
npm install
npm run build
```

You'll get an executable in `dist/` folder.

---

## Troubleshooting

### APK Installation Fails
- Make sure Android 6.0+ is installed
- Check if you enabled "Unknown sources"
- Clear app cache: Settings → Apps → Jarvis → Storage → Clear cache

### App can't connect to backend
- Make sure FastAPI server is running: `uvicorn app.main:app --reload`
- Check backend IP/port in App.js
- For mobile on same WiFi: use your PC's local IP (192.168.x.x)
- For testing on Android emulator: use `10.0.2.2:8000` instead of `localhost:8000`

### Build fails
- Clear cache: `eas build --platform android --clear-cache`
- Update EAS: `npm install -g eas-cli@latest`
- Check Node version: `node -v` (should be 16+)

---

## Release Versions

### v1.0.0 (Current)
- Basic chat UI
- Backend API connection
- Message history
- Ready for AI integration

### Future Releases
- Voice input/output
- Real OpenAI/Gemini integration
- Desktop automation features
- Advanced memory & context

---

## Support

For issues, check:
- GitHub Issues: https://github.com/farjikamkeliye-source/jarvis-ai-assistant/issues
- Expo Docs: https://docs.expo.dev/
- FastAPI Docs: http://localhost:8000/docs (when backend is running)

---

Happy building! 🚀
