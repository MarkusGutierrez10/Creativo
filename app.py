from flask import Flask, render_template, abort

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("login.html")

@app.route('/view/<path:ruta_template>')
def redirigir(ruta_template):
    try:
        return render_template(f'{ruta_template}.html')
    except jinja2.exceptions.TemplateNotFound:
        abort(404)

if __name__ == "__main__":
    app.run(debug=True)