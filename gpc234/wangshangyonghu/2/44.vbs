n=inputbox("gpc234������� ���Ե�DNS ����,���ȷ�������س�","í�����Ŷ���,������� ���Ե�DNS ����","ipconfig /flushdns")
If n= "" Then
Else
Set ws = CreateObject("WScript.Shell")
ws.Run "cmd.exe /k "+n
End If

