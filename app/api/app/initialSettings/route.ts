export async function GET() {
  const initialSettings = {
    name: "examiner",
    version: "1.0.7",
    currentEmoji: "🎃",
    whenAppLatestMessage: "You are currently using the app's latest version",
    uri: "https://drive.usercontent.google.com/download?id=1hRlg3Jqdc0mAlT4WQmemAJ5mhvDktiXb&export=download&authuser=0&confirm=t&uuid=ed85a1be-dbd8-4a0a-86e7-7b8b8035aa62&at=AN_67v2y0-bnO9zb305a3K8R9Rvj:1728956084569",
  };
  return Response.json(initialSettings);
}
