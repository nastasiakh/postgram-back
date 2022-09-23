CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    password TEXT NOT NULL
)
CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    user_id INT,
        FOREIGN KEY (user_id)
        REFERENCES users (id),
    title TEXT NOT NULL,
    date DATE DEFAULT NOW(),
    text TEXT NOT NULL,
    image TEXT NOT NULL
)
CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    user_id INT,
        FOREIGN KEY (user_id)
        REFERENCES users (id),
    post_id INT,
        FOREIGN KEY (post_id)
        REFERENCES posts (id),
    date DATE DEFAULT NOW(),
    text TEXT NOT NULL
)
CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    user_id INT,
        FOREIGN KEY (user_id)
        REFERENCES users (id),
    post_id INT,
        FOREIGN KEY (post_id)
        REFERENCES posts (id),
)

