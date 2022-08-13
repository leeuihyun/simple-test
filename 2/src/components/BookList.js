import React, { useState, useEffect } from "react";
import db from "../firebase";
import BookItem from "./BookItem";

function BookList({ books }) {
    return <div>{books && books.map((book) => <BookItem book={book} />)}</div>;
}

export default BookList;
    