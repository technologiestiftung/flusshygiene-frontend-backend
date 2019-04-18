"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultOptions = { method: 'GET', url: '', async: true, type: 'DEFAULT' };
const request = (next) => (opts) => {
    const option = Object.assign({}, defaultOptions, opts);
    const xhr = new XMLHttpRequest();
    xhr.open(option.method, option.url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let responseText;
            try {
                responseText = JSON.parse(xhr.responseText);
            }
            catch (err) {
                // tslint:disable-next-line:no-console
                console.log(err);
                responseText = { raw: xhr.responseText, err };
            }
            if (xhr.status === 200) {
                // success we got an answer with status 200
                // dispatch an actoin with its content
                // follow this action to
                // the response for the POST request actually
                // lands on neverland…
                return next({
                    body: responseText,
                    type: `${option.type}_RECEIVED`,
                });
            }
            else {
                // we count any other status then 200 as error
                // so we dispatch and error message for that
                // follow it to
                // lib/reducers/error.js
                return next({
                    error: {
                        message: responseText,
                        status: xhr.status,
                    },
                    type: `${option.type}_ERROR`,
                });
            }
        }
    };
    // if we have a body
    if (option.body !== undefined) {
        // console.log('send with body');
        // send it
        // this is POST
        // console.log(option.body);
        xhr.send(JSON.stringify(option.body));
    }
    else {
        // if we have no body we are making a GET request
        xhr.send();
    }
};
exports.default = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWpheC1yZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWpheC1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBWUEsTUFBTSxjQUFjLEdBQUcsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDOUUsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUU7SUFDaEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sR0FBRyxHQUFtQixJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN6RCxHQUFHLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxFQUFFO1FBQzVCLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxjQUFjLENBQUMsSUFBSSxFQUFFO1lBQzFDLElBQUksWUFBZ0MsQ0FBQztZQUNyQyxJQUFJO2dCQUNGLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM3QztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLHNDQUFzQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsWUFBWSxHQUFHLEVBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFDLENBQUM7YUFDN0M7WUFDRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUN0QiwyQ0FBMkM7Z0JBQzNDLHNDQUFzQztnQkFDdEMsd0JBQXdCO2dCQUN4Qiw2Q0FBNkM7Z0JBQzdDLHNCQUFzQjtnQkFFdEIsT0FBTyxJQUFJLENBQUM7b0JBQ1YsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLFdBQVc7aUJBQ2hDLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLDhDQUE4QztnQkFDOUMsNENBQTRDO2dCQUM1QyxlQUFlO2dCQUNmLHdCQUF3QjtnQkFDeEIsT0FBTyxJQUFJLENBQUM7b0JBQ1YsS0FBSyxFQUFFO3dCQUNMLE9BQU8sRUFBRSxZQUFZO3dCQUNyQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07cUJBQ25CO29CQUNELElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLFFBQVE7aUJBQzdCLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDLENBQUM7SUFDRixvQkFBb0I7SUFDcEIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUM3QixpQ0FBaUM7UUFDakMsVUFBVTtRQUNWLGVBQWU7UUFDZiw0QkFBNEI7UUFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3ZDO1NBQU07UUFDTCxpREFBaUQ7UUFDakQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ1o7QUFDSCxDQUFDLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSU9wdGlvbiB7XG4gIG1ldGhvZDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgYXN5bmM6IGJvb2xlYW47XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGJvZHk/OiBvYmplY3Q7XG59XG5cbmludGVyZmFjZSBJUGFyc2VFcnJvciB7XG4gIHJhdzogc3RyaW5nO1xuICBlcnI6IEVycm9yO1xufVxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7bWV0aG9kOiAnR0VUJywgdXJsOiAnJywgYXN5bmM6IHRydWUsIHR5cGU6ICdERUZBVUxUJ307XG5jb25zdCByZXF1ZXN0ID0gKG5leHQ6IGFueSkgPT4gKG9wdHM/OiBJT3B0aW9uKSA9PiB7XG4gIGNvbnN0IG9wdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRzKTtcbiAgY29uc3QgeGhyOiBYTUxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIub3BlbihvcHRpb24ubWV0aG9kLCBvcHRpb24udXJsLCB0cnVlKTtcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICBsZXQgcmVzcG9uc2VUZXh0OiBvYmplY3R8SVBhcnNlRXJyb3I7XG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZVRleHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHtyYXc6IHhoci5yZXNwb25zZVRleHQsIGVycn07XG4gICAgICB9XG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIC8vIHN1Y2Nlc3Mgd2UgZ290IGFuIGFuc3dlciB3aXRoIHN0YXR1cyAyMDBcbiAgICAgICAgLy8gZGlzcGF0Y2ggYW4gYWN0b2luIHdpdGggaXRzIGNvbnRlbnRcbiAgICAgICAgLy8gZm9sbG93IHRoaXMgYWN0aW9uIHRvXG4gICAgICAgIC8vIHRoZSByZXNwb25zZSBmb3IgdGhlIFBPU1QgcmVxdWVzdCBhY3R1YWxseVxuICAgICAgICAvLyBsYW5kcyBvbiBuZXZlcmxhbmTigKZcblxuICAgICAgICByZXR1cm4gbmV4dCh7XG4gICAgICAgICAgYm9keTogcmVzcG9uc2VUZXh0LFxuICAgICAgICAgIHR5cGU6IGAke29wdGlvbi50eXBlfV9SRUNFSVZFRGAsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gd2UgY291bnQgYW55IG90aGVyIHN0YXR1cyB0aGVuIDIwMCBhcyBlcnJvclxuICAgICAgICAvLyBzbyB3ZSBkaXNwYXRjaCBhbmQgZXJyb3IgbWVzc2FnZSBmb3IgdGhhdFxuICAgICAgICAvLyBmb2xsb3cgaXQgdG9cbiAgICAgICAgLy8gbGliL3JlZHVjZXJzL2Vycm9yLmpzXG4gICAgICAgIHJldHVybiBuZXh0KHtcbiAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VUZXh0LFxuICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHlwZTogYCR7b3B0aW9uLnR5cGV9X0VSUk9SYCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvLyBpZiB3ZSBoYXZlIGEgYm9keVxuICBpZiAob3B0aW9uLmJvZHkgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzZW5kIHdpdGggYm9keScpO1xuICAgIC8vIHNlbmQgaXRcbiAgICAvLyB0aGlzIGlzIFBPU1RcbiAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24uYm9keSk7XG4gICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkob3B0aW9uLmJvZHkpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB3ZSBoYXZlIG5vIGJvZHkgd2UgYXJlIG1ha2luZyBhIEdFVCByZXF1ZXN0XG4gICAgeGhyLnNlbmQoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcbiJdfQ==