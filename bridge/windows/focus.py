from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

def set_focus_assist(mode):
    """Set Focus Assist mode.
    Mode 0 = Off
    Mode 1 = Priority Only
    Mode 2 = Alarms Only
    """
    if mode not in [0, 1, 2]:
        return "Invalid mode"

    script = f"""
    [WinRT.Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null
    [WinRT.Windows.UI.Notifications.ToastNotificationManager]::History.Clear('Windows.System')
    New-ItemProperty -Path 'HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Notifications\\Settings' -Name 'FocusAssist' -Value {mode} -PropertyType DWord -Force
    """
    
    subprocess.run(["powershell", "-ExecutionPolicy", "Bypass", "-Command", script], shell=True)

    return f"Focus Assist set to {mode}"

@app.route('/focus', methods=['POST'])
def toggle_focus():
    data = request.json
    mode = data.get("mode")  # 0 = Off, 1 = Priority Only, 2 = Alarms Only
    
    if mode not in [0, 1, 2]:
        return jsonify({"error": "Invalid mode. Use 0 (Off), 1 (Priority Only), or 2 (Alarms Only)"}), 400
    
    status = set_focus_assist(mode)
    return jsonify({"status": status})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
