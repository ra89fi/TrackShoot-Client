import React from 'react';

const Blog = () => {
    return (
        <div style={{ margin: '60px' }}>
            <h4>Difference between `javascript` and `nodejs`</h4>
            <p>
                Javascript is a Just-in-Time compiled programming language and
                NodeJs is a library written in Javascript that enables
                developers write non-blocking asynchronous code to make server
                side applications and tools.
            </p>
            <h4>
                When should you use `nodejs` and when should you use `mongodb`
            </h4>
            <p>
                NodeJs is used to write server side applications and mongodb is
                an npm package that is used with NodeJs to connect with mongodb
                NoSQL databases.
            </p>
            <h4>Differences between `sql` and `nosql` databases</h4>
            <p>
                SQL databases are row based and NoSQL databases are document
                based. SQL databases do not allow sharding white NoSQL databases
                does.
            </p>
            <h4>What is the purpose of `jwt` and how does it work</h4>
            <p>
                JWT is an authentication strategy used in servers to verify and
                authorize users. It encodes a provided value using a private
                secret key that can be sent to client safely and client can use
                that to communicate to server as server can verify the
                authenticity of client by decoding that value.
            </p>
        </div>
    );
};

export default Blog;
