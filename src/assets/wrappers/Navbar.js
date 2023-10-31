import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  ${"" /* z-index: 1; */}
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
    background-attachment: fixed;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .search-text {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  .btn {
    margin: 0px 0px 0px 20px;
  }

  .search-input {
    flex: 1;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
  }

  @use postcss-color-function;
  @use postcss-nested;
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,700,900");

  /* Base styling */

  body {
    width: 430px;
    margin: 0 auto;
    background-color: #f7cac9;
    font-family: "Raleway", sans-serif;
  }

  .search {
    &__container {
      padding-top: 64px;
      width: 800px;
    }

    &__title {
      font-size: 22px;
      font-weight: 900;
      text-align: center;
      color: #ff8b88;
    }

    &__input {
      width: 100%;
      padding: 12px 24px;

      background-color: transparent;
      transition: transform 250ms ease-in-out;
      font-size: 14px;
      line-height: 18px;

      color: #575756;
      background-color: transparent;
      /*         background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg); */

      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: 18px 18px;
      background-position: 95% center;
      border-radius: 50px;
      border: 1px solid #ff0000;
      transition: all 250ms ease-in-out;
      backface-visibility: hidden;
      transform-style: preserve-3d;

      &::placeholder {
        color: color(#575756 a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      &:hover,
      &:focus {
        padding: 12px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #ff0000;
        border-radius: 0;
        background-position: 100% center;
      }
    }
  }

  .credits {
    &__container {
      margin-top: 60px;
    }

    &__text {
      text-align: center;
      font-size: 13px;
      line-height: 18px;
    }

    &__link {
      color: #ff8b88;
      text-decoration: none;
      transition: color 250ms ease-in;

      &:hover,
      &:focus {
        color: color(#ff8b88 blackness(+25%));
      }
    }
  }
  /* Media Queries for Tablets and Phones */
  @media only screen and (max-width: 768px) {
    body {
      width: 100%;
    }

    .search__container {
      width: 100%;
      padding: 20px;
    }

    .search__input {
      font-size: 12px;
      margin-top: 60px;
    }
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .search-text {
      display: block;
    }
  }
`;
export default Wrapper;
