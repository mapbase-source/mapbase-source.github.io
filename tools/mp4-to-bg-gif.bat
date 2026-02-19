if "%~1" == "" (
    echo No file
    pause
    exit /b
)

set "input=%~1"

ffmpeg -i "%input%" -filter_complex "fps=30,crop=iw:115,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" %~dpn1.gif
pause
