# -*- coding: utf-8 -*-
# encoding=utf-8
from BaseHTTPServer import BaseHTTPRequestHandler
import cgi
import json
import cutWord
import matching

SERVER_PORT=8000

class HttpRequestHandler(BaseHTTPRequestHandler):
 
    def do_GET(self):
        # return all todos

        if self.path != '/':
            self.send_error(404, "File not found.")
            return
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write("Get not support!")

    def do_POST(self):
        try:
            ctype, pdict = cgi.parse_header(self.headers['content-type'])
            if ctype == 'application/json':
                length = int(self.headers['content-length'])
                post_values = json.loads(self.rfile.read(length))
            else:
                self.send_error(415, "Only json data is supported.")
                return
            if self.path=="/api/cutWords":
                words = post_values["data"]
                topN = post_values["topN"]
                cutWords = cutWord.apply(words,topN)
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps(cutWords))
            if self.path=="/api/recommendation":
                #  process data
                coders = post_values["candidates"]
                me = post_values["matching"]
                matchers = matching.match(coders,me)
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps(matchers))
        except Exception, e:
            self.send_error(401,'Url Not Found or Data format Error: %s' % self.path)

if __name__ == '__main__':
    # Start a simple server, and loop forever
    from BaseHTTPServer import HTTPServer
    server = HTTPServer(('localhost', SERVER_PORT), HttpRequestHandler)
    print "Running server on port:",SERVER_PORT," use <Ctrl-C> to stop"
    server.serve_forever()