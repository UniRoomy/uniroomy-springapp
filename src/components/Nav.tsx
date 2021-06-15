import { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { webState } from "../reducers";
import navStyles from "../styles/web/Nav.module.css";

interface Props {}

export default function Nav({}: Props) {
  const userStatus = useSelector((state: webState) => state.userStatus);

  return (
    <nav className={navStyles.nav}>
      <ul>
        {!userStatus.loggedIn ? (
          <>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={`/${userStatus.userEmail}`}>
                <a>Home</a>
              </Link>
            </li>
            {userStatus.isClient ? (
              // CLIENTS
              <>
                <li>
                  <Link href={`/${userStatus.userEmail}/bookingPage`}>
                    <a>Booking Page</a>
                  </Link>
                </li>
              </>
            ) : (
              // CLEANERS
              <>
                <li>
                  <Link href={`/${userStatus.userEmail}/acceptedBookings`}>
                    <a>Accepted Bookings</a>
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link href={`/${userStatus.userEmail}/bookingHistory`}>
                <a>Booking History</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
