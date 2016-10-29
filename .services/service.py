# -*- coding: utf-8 -*-
# encoding=utf-8
from BaseHTTPServer import BaseHTTPRequestHandler
import cgi
import json
import todo
import matching

class TodoHandler(BaseHTTPRequestHandler):

    # Global instance to store todos. You should use a database in reality.
    TODOS = []

    def do_GET(self):
        # return all todos

        if self.path != '/':
            self.send_error(404, "File not found.")
            return

        # Just dump data to json, and return it
        message = json.dumps(self.TODOS)

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(message)

    def do_POST(self):
        try:
            ctype, pdict = cgi.parse_header(self.headers['content-type'])
            if ctype == 'application/json':
                length = int(self.headers['content-length'])
                post_values = json.loads(self.rfile.read(length))
                # self.TODOS.append(post_values)
            else:
                self.send_error(415, "Only json data is supported.")
                return
            if self.path=="/api/cutWords":
                #  process data
                todostr = post_values["data"]
                topN = post_values["topN"]
                todos = todo.cutWords(todostr,topN)
                # print todos
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(todos)
            if self.path=="/api/recommendation":
                #  process data
                coders = post_values["candidates"]
                me = post_values["matching"]
                todos = matching.match(coders,me)
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(todos)
        except Exception, e:
            self.send_error(401,'Url Not Found or Data format Error: %s' % self.path)
        else:
            pass
        finally:
            pass

if __name__ == '__main__':
    # Start a simple server, and loop forever
    from BaseHTTPServer import HTTPServer
    server = HTTPServer(('localhost', 8000), TodoHandler)
    print("Starting server, use <Ctrl-C> to stop")
    server.serve_forever()