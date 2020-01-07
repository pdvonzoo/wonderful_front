import React from 'react';
import styled from "styled-components";
{/* <li>  <img src={book.image} />
/        책 이름 : {book.title} / 책 저자 : {book.author} / 출판 날짜 :{book.pubdate}  / isbn:{book.isbn} */}

const Container = styled.li`
    display: inline-block;
    margin-bottom: 7.5rem;
    padding: 0 1.5rem;
    width: 33.3333%;
    vertical-align: top;
`;

const ListItem = styled.div`
    display: flex;
    border: 1px solid rgba(0,0,0,.1);
`;

const ImageContainer = styled.div`
    height: 100%;
`;
const Image = styled.img`
    height: 100%;
`;

const BookInfo = styled.div`
    padding: 1.5rem 2.3rem 1.5rem;
`;
const Title = styled.h2`
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    height: 3.6rem;
    overflow: hidden;
    margin-bottom: 1.7rem;
    text-overflow: ellipsis;
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: bold;
`;

const TextContainer = styled.div`
    margin-bottom: 1.7rem;
    height: 2.88rem;
    text-overflow: ellipsis;
    word-wrap:break-word; 
`;

const Text = styled.p`
    font-size: 1.2rem;
    line-height: 1.4;
`;

const BtnContainer = styled.div`
`;

const RentalBtn = styled.button`
    border: 0;
    background-color: #ddd;
    color: #fff;
    padding: .7rem 1rem;
    font-size: 1.1rem;
`;

const searchABook = ({ title, author, pubdate, isbn, image }) => {
    return (
        <Container>
            <ListItem>
                <ImageContainer>
                    <Image src={image} />
                </ImageContainer>
                <BookInfo>
                    <Title>{title}</Title>
                    <TextContainer>
                        <Text>{author}</Text>
                        <Text>{pubdate}</Text>
                    </TextContainer>
                    <BtnContainer>
                        <RentalBtn>대여하기</RentalBtn>
                    </BtnContainer>
                    {/* <Text>{isbn}</Text> */}
                </BookInfo>
            </ListItem>
        </Container>
    );
};

export default searchABook;