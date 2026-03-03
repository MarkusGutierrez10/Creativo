from flask import Flask, render_template, abort

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("login.html")

@app.route("/<url>")
def redirigir(url):
    try:
        return render_template(f"view/{url}.html")
    except:
        abort(404)

if __name__ == "__main__":
    app.run(debug=True)