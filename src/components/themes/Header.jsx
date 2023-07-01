import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import CloseIcon from "@mui/icons-material/Close"
import NavMenu from "./NavMenu"

function ResponsiveAppBar() {
    const pages = ["About Us", "Our Projects", "Contact Us"]

    const [anchorElNav, setAnchorElNav] = React.useState(null)

    const handleClick = event => {
        setAnchorElNav(!anchorElNav)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(false)
    }

    return (
        <AppBar position="fixed" style={{ backgroundColor: "black" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                        <svg
                            width="40"
                            height="38"
                            viewBox="0 0 208 194"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M46.3329 38.5923C46.3329 36.5453 47.1966 34.582 48.734 33.1345C50.2713 31.687 52.3564 30.8738 54.5306 30.8738H71.4095C72.8485 30.8739 74.2621 31.2305 75.5083 31.908C76.7544 32.5854 77.7892 33.5598 78.5087 34.7331L86.9441 48.4874C88.0312 50.2612 88.3253 52.3689 87.7619 54.3469C87.1985 56.3249 85.8236 58.0111 83.9397 59.0347C82.0558 60.0582 79.8172 60.3352 77.7164 59.8047C75.6156 59.2742 73.8246 57.9796 72.7376 56.2058L66.6795 46.3108H54.5306C52.3564 46.3108 50.2713 45.4976 48.734 44.0501C47.1966 42.6026 46.3329 40.6394 46.3329 38.5923ZM206.04 100.842L178.668 145.478C177.948 146.651 176.913 147.625 175.667 148.303C174.421 148.98 173.007 149.337 171.568 149.337H122.424L97.4207 190.106C96.7012 191.279 95.6664 192.253 94.4202 192.931C93.1741 193.608 91.7605 193.965 90.3215 193.965H35.6022C34.1632 193.965 32.7497 193.608 31.5035 192.931C30.2573 192.253 29.2225 191.279 28.503 190.106L1.09828 145.478C0.378783 144.304 0 142.973 0 141.618C0 140.263 0.378783 138.932 1.09828 137.759L26.1339 96.9825L1.09828 56.2058C0.378783 55.0325 0 53.7015 0 52.3466C0 50.9917 0.378783 49.6607 1.09828 48.4874L28.503 3.85923C29.2225 2.68591 30.2573 1.71156 31.5035 1.03413C32.7497 0.356692 34.1632 3.44183e-05 35.6022 0H90.3379C91.7769 3.44183e-05 93.1905 0.356692 94.4366 1.03413C95.6828 1.71156 96.7176 2.68591 97.4371 3.85923L122.424 44.6282H171.519C172.958 44.6282 174.372 44.9848 175.618 45.6623C176.864 46.3397 177.899 47.3141 178.618 48.4874L206.04 93.1233C206.759 94.2966 207.138 95.6276 207.138 96.9825C207.138 98.3374 206.759 99.6684 206.04 100.842ZM17.6985 52.3466L40.3322 89.264H84.7143L107.807 51.6134L85.6079 15.4369H40.3322L17.6985 52.3466ZM107.791 142.352L84.7143 104.701H40.3322L17.6985 141.618L40.3322 178.528H85.6079L107.791 142.352ZM189.439 96.9825L166.806 60.0651H122.424L99.3471 97.7543L121.53 133.931H166.806L189.439 96.9825Z"
                                fill="#DCEB2E"
                            />
                        </svg>
                    </Box>
                    <Box
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <svg
                            width="175"
                            height="22"
                            viewBox="0 0 700 91"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M30.8853 89.7463H0.952393V1.21045H31.1327C39.626 1.21045 46.9375 2.9829 53.067 6.52779C59.1965 10.0439 63.9105 15.1018 67.2088 21.7017C70.5347 28.3015 72.1977 36.1983 72.1977 45.3919C72.1977 54.6144 70.5347 62.54 67.2088 69.1686C63.9105 75.7973 59.169 80.8841 52.9845 84.429C46.8275 87.9739 39.4611 89.7463 30.8853 89.7463ZM18.8049 73.7078H30.1432C35.4206 73.7078 39.8597 72.7279 43.4604 70.7682C47.0887 68.7796 49.8098 65.7102 51.6239 61.5601C53.4655 57.3812 54.3863 51.9918 54.3863 45.3919C54.3863 38.8497 53.4655 33.5036 51.6239 29.3534C49.8098 25.2033 47.1024 22.1484 43.5017 20.1886C39.9009 18.2288 35.4618 17.2489 30.1844 17.2489H18.8049V73.7078Z"
                                fill="white"
                            />
                            <path
                                d="M83.2162 89.7463V1.21045H140.113V16.6437H101.069V37.7401H137.186V53.1734H101.069V74.3131H140.278V89.7463H83.2162Z"
                                fill="white"
                            />
                            <path
                                d="M197.907 26.6732C197.577 23.1859 196.162 20.4768 193.661 18.5458C191.159 16.6149 187.765 15.6494 183.477 15.6494C180.563 15.6494 178.103 16.0817 176.097 16.9463C174.09 17.7821 172.551 18.9493 171.479 20.448C170.434 21.9466 169.912 23.647 169.912 25.5492C169.857 27.1343 170.173 28.5177 170.861 29.6993C171.575 30.8809 172.551 31.904 173.788 32.7686C175.025 33.6044 176.454 34.3393 178.076 34.9734C179.697 35.5786 181.429 36.0974 183.271 36.5297L190.857 38.4318C194.54 39.2964 197.921 40.4492 201 41.8903C204.078 43.3313 206.744 45.1037 208.998 47.2076C211.252 49.3115 212.997 51.79 214.234 54.6432C215.499 57.4964 216.145 60.7675 216.172 64.4565C216.145 69.8747 214.825 74.5724 212.214 78.5496C209.63 82.498 205.892 85.5674 201 87.7577C196.134 89.9192 190.266 91 183.394 91C176.578 91 170.641 89.9048 165.583 87.7145C160.553 85.5241 156.622 82.2819 153.791 77.9876C150.988 73.6646 149.517 68.3184 149.38 61.9492H166.655C166.847 64.9177 167.658 67.3962 169.088 69.3848C170.544 71.3446 172.482 72.8288 174.901 73.8375C177.347 74.8174 180.11 75.3074 183.188 75.3074C186.212 75.3074 188.837 74.8462 191.063 73.924C193.317 73.0017 195.062 71.7192 196.299 70.0765C197.536 68.4337 198.155 66.546 198.155 64.4133C198.155 62.4247 197.591 60.7531 196.464 59.3986C195.365 58.044 193.743 56.8912 191.599 55.9401C189.483 54.9891 186.885 54.1245 183.807 53.3463L174.612 50.9254C167.493 49.1097 161.872 46.2709 157.749 42.409C153.626 38.5471 151.579 33.345 151.606 26.8028C151.579 21.4423 152.939 16.759 155.688 12.753C158.464 8.74695 162.271 5.61995 167.109 3.37197C171.946 1.12399 177.444 0 183.601 0C189.867 0 195.337 1.12399 200.01 3.37197C204.71 5.61995 208.366 8.74695 210.977 12.753C213.588 16.759 214.935 21.399 215.018 26.6732H197.907Z"
                                fill="white"
                            />
                            <path
                                d="M243.827 1.21045V89.7463H225.974V1.21045H243.827Z"
                                fill="white"
                            />
                            <path
                                d="M312.299 29.829C311.722 27.7251 310.911 25.8662 309.867 24.2523C308.822 22.6095 307.544 21.2261 306.032 20.1021C304.548 18.9493 302.844 18.0703 300.92 17.4651C299.023 16.8599 296.921 16.5572 294.612 16.5572C290.296 16.5572 286.503 17.6812 283.232 19.9292C279.989 22.1772 277.46 25.4483 275.646 29.7425C273.832 34.0079 272.925 39.2244 272.925 45.3919C272.925 51.5595 273.818 56.8047 275.605 61.1278C277.391 65.4508 279.92 68.7508 283.191 71.0276C286.462 73.2755 290.324 74.3995 294.777 74.3995C298.817 74.3995 302.267 73.6502 305.125 72.1515C308.011 70.6241 310.21 68.477 311.722 65.7102C313.261 62.9435 314.031 59.6724 314.031 55.8969L317.659 56.4589H295.89V42.3658H331.224V53.5192C331.224 61.3007 329.657 67.987 326.524 73.5781C323.39 79.1405 319.075 83.4347 313.577 86.4608C308.08 89.4581 301.786 90.9568 294.694 90.9568C286.778 90.9568 279.824 89.1267 273.832 85.4665C267.84 81.7775 263.167 76.5466 259.814 69.7739C256.488 62.9723 254.825 54.9026 254.825 45.5648C254.825 38.3886 255.814 31.9905 257.793 26.3705C259.8 20.7218 262.604 15.9376 266.204 12.0181C269.805 8.0985 273.997 5.1156 278.779 3.06936C283.562 1.02312 288.743 0 294.323 0C299.106 0 303.559 0.734917 307.682 2.20475C311.805 3.64577 315.46 5.692 318.649 8.34347C321.865 10.9949 324.49 14.1508 326.524 17.8109C328.558 21.4423 329.863 25.4483 330.441 29.829H312.299Z"
                                fill="white"
                            />
                            <path
                                d="M413.055 1.21045V89.7463H397.635L360.899 34.0223H360.28V89.7463H342.428V1.21045H358.095L394.543 56.8912H395.285V1.21045H413.055Z"
                                fill="white"
                            />
                            <path
                                d="M418.425 89.7463L432.443 1.21045H455.367L449.924 35.7948H480.27L485.712 1.21045H508.636L494.618 89.7463H471.694L477.136 55.162H446.791L441.349 89.7463H418.425Z"
                                fill="white"
                            />
                            <path
                                d="M540.238 1.21045L526.22 89.7463H503.296L517.315 1.21045H540.238Z"
                                fill="white"
                            />
                            <path
                                d="M571.985 1.21045L579.407 63.6352H580.066L607.278 1.21045H633.17L591.281 89.7463H559.946L546.093 1.21045H571.985Z"
                                fill="white"
                            />
                            <path
                                d="M625.079 89.7463L639.097 1.21045H699.952L696.819 20.5777H658.887L656.579 35.7948H691.377L688.243 55.162H653.445L651.136 70.3791H688.903L685.769 89.7463H625.079Z"
                                fill="white"
                            />
                        </svg>
                    </Box>

                    <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
                        <svg
                            width="40"
                            height="38"
                            viewBox="0 0 208 194"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M46.3329 38.5923C46.3329 36.5453 47.1966 34.582 48.734 33.1345C50.2713 31.687 52.3564 30.8738 54.5306 30.8738H71.4095C72.8485 30.8739 74.2621 31.2305 75.5083 31.908C76.7544 32.5854 77.7892 33.5598 78.5087 34.7331L86.9441 48.4874C88.0312 50.2612 88.3253 52.3689 87.7619 54.3469C87.1985 56.3249 85.8236 58.0111 83.9397 59.0347C82.0558 60.0582 79.8172 60.3352 77.7164 59.8047C75.6156 59.2742 73.8246 57.9796 72.7376 56.2058L66.6795 46.3108H54.5306C52.3564 46.3108 50.2713 45.4976 48.734 44.0501C47.1966 42.6026 46.3329 40.6394 46.3329 38.5923ZM206.04 100.842L178.668 145.478C177.948 146.651 176.913 147.625 175.667 148.303C174.421 148.98 173.007 149.337 171.568 149.337H122.424L97.4207 190.106C96.7012 191.279 95.6664 192.253 94.4202 192.931C93.1741 193.608 91.7605 193.965 90.3215 193.965H35.6022C34.1632 193.965 32.7497 193.608 31.5035 192.931C30.2573 192.253 29.2225 191.279 28.503 190.106L1.09828 145.478C0.378783 144.304 0 142.973 0 141.618C0 140.263 0.378783 138.932 1.09828 137.759L26.1339 96.9825L1.09828 56.2058C0.378783 55.0325 0 53.7015 0 52.3466C0 50.9917 0.378783 49.6607 1.09828 48.4874L28.503 3.85923C29.2225 2.68591 30.2573 1.71156 31.5035 1.03413C32.7497 0.356692 34.1632 3.44183e-05 35.6022 0H90.3379C91.7769 3.44183e-05 93.1905 0.356692 94.4366 1.03413C95.6828 1.71156 96.7176 2.68591 97.4371 3.85923L122.424 44.6282H171.519C172.958 44.6282 174.372 44.9848 175.618 45.6623C176.864 46.3397 177.899 47.3141 178.618 48.4874L206.04 93.1233C206.759 94.2966 207.138 95.6276 207.138 96.9825C207.138 98.3374 206.759 99.6684 206.04 100.842ZM17.6985 52.3466L40.3322 89.264H84.7143L107.807 51.6134L85.6079 15.4369H40.3322L17.6985 52.3466ZM107.791 142.352L84.7143 104.701H40.3322L17.6985 141.618L40.3322 178.528H85.6079L107.791 142.352ZM189.439 96.9825L166.806 60.0651H122.424L99.3471 97.7543L121.53 133.931H166.806L189.439 96.9825Z"
                                fill="#DCEB2E"
                            />
                        </svg>
                    </Box>
                    <Box
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <svg
                            width="120"
                            height="14"
                            viewBox="0 0 700 91"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M30.8853 89.7463H0.952393V1.21045H31.1327C39.626 1.21045 46.9375 2.9829 53.067 6.52779C59.1965 10.0439 63.9105 15.1018 67.2088 21.7017C70.5347 28.3015 72.1977 36.1983 72.1977 45.3919C72.1977 54.6144 70.5347 62.54 67.2088 69.1686C63.9105 75.7973 59.169 80.8841 52.9845 84.429C46.8275 87.9739 39.4611 89.7463 30.8853 89.7463ZM18.8049 73.7078H30.1432C35.4206 73.7078 39.8597 72.7279 43.4604 70.7682C47.0887 68.7796 49.8098 65.7102 51.6239 61.5601C53.4655 57.3812 54.3863 51.9918 54.3863 45.3919C54.3863 38.8497 53.4655 33.5036 51.6239 29.3534C49.8098 25.2033 47.1024 22.1484 43.5017 20.1886C39.9009 18.2288 35.4618 17.2489 30.1844 17.2489H18.8049V73.7078Z"
                                fill="white"
                            />
                            <path
                                d="M83.2162 89.7463V1.21045H140.113V16.6437H101.069V37.7401H137.186V53.1734H101.069V74.3131H140.278V89.7463H83.2162Z"
                                fill="white"
                            />
                            <path
                                d="M197.907 26.6732C197.577 23.1859 196.162 20.4768 193.661 18.5458C191.159 16.6149 187.765 15.6494 183.477 15.6494C180.563 15.6494 178.103 16.0817 176.097 16.9463C174.09 17.7821 172.551 18.9493 171.479 20.448C170.434 21.9466 169.912 23.647 169.912 25.5492C169.857 27.1343 170.173 28.5177 170.861 29.6993C171.575 30.8809 172.551 31.904 173.788 32.7686C175.025 33.6044 176.454 34.3393 178.076 34.9734C179.697 35.5786 181.429 36.0974 183.271 36.5297L190.857 38.4318C194.54 39.2964 197.921 40.4492 201 41.8903C204.078 43.3313 206.744 45.1037 208.998 47.2076C211.252 49.3115 212.997 51.79 214.234 54.6432C215.499 57.4964 216.145 60.7675 216.172 64.4565C216.145 69.8747 214.825 74.5724 212.214 78.5496C209.63 82.498 205.892 85.5674 201 87.7577C196.134 89.9192 190.266 91 183.394 91C176.578 91 170.641 89.9048 165.583 87.7145C160.553 85.5241 156.622 82.2819 153.791 77.9876C150.988 73.6646 149.517 68.3184 149.38 61.9492H166.655C166.847 64.9177 167.658 67.3962 169.088 69.3848C170.544 71.3446 172.482 72.8288 174.901 73.8375C177.347 74.8174 180.11 75.3074 183.188 75.3074C186.212 75.3074 188.837 74.8462 191.063 73.924C193.317 73.0017 195.062 71.7192 196.299 70.0765C197.536 68.4337 198.155 66.546 198.155 64.4133C198.155 62.4247 197.591 60.7531 196.464 59.3986C195.365 58.044 193.743 56.8912 191.599 55.9401C189.483 54.9891 186.885 54.1245 183.807 53.3463L174.612 50.9254C167.493 49.1097 161.872 46.2709 157.749 42.409C153.626 38.5471 151.579 33.345 151.606 26.8028C151.579 21.4423 152.939 16.759 155.688 12.753C158.464 8.74695 162.271 5.61995 167.109 3.37197C171.946 1.12399 177.444 0 183.601 0C189.867 0 195.337 1.12399 200.01 3.37197C204.71 5.61995 208.366 8.74695 210.977 12.753C213.588 16.759 214.935 21.399 215.018 26.6732H197.907Z"
                                fill="white"
                            />
                            <path
                                d="M243.827 1.21045V89.7463H225.974V1.21045H243.827Z"
                                fill="white"
                            />
                            <path
                                d="M312.299 29.829C311.722 27.7251 310.911 25.8662 309.867 24.2523C308.822 22.6095 307.544 21.2261 306.032 20.1021C304.548 18.9493 302.844 18.0703 300.92 17.4651C299.023 16.8599 296.921 16.5572 294.612 16.5572C290.296 16.5572 286.503 17.6812 283.232 19.9292C279.989 22.1772 277.46 25.4483 275.646 29.7425C273.832 34.0079 272.925 39.2244 272.925 45.3919C272.925 51.5595 273.818 56.8047 275.605 61.1278C277.391 65.4508 279.92 68.7508 283.191 71.0276C286.462 73.2755 290.324 74.3995 294.777 74.3995C298.817 74.3995 302.267 73.6502 305.125 72.1515C308.011 70.6241 310.21 68.477 311.722 65.7102C313.261 62.9435 314.031 59.6724 314.031 55.8969L317.659 56.4589H295.89V42.3658H331.224V53.5192C331.224 61.3007 329.657 67.987 326.524 73.5781C323.39 79.1405 319.075 83.4347 313.577 86.4608C308.08 89.4581 301.786 90.9568 294.694 90.9568C286.778 90.9568 279.824 89.1267 273.832 85.4665C267.84 81.7775 263.167 76.5466 259.814 69.7739C256.488 62.9723 254.825 54.9026 254.825 45.5648C254.825 38.3886 255.814 31.9905 257.793 26.3705C259.8 20.7218 262.604 15.9376 266.204 12.0181C269.805 8.0985 273.997 5.1156 278.779 3.06936C283.562 1.02312 288.743 0 294.323 0C299.106 0 303.559 0.734917 307.682 2.20475C311.805 3.64577 315.46 5.692 318.649 8.34347C321.865 10.9949 324.49 14.1508 326.524 17.8109C328.558 21.4423 329.863 25.4483 330.441 29.829H312.299Z"
                                fill="white"
                            />
                            <path
                                d="M413.055 1.21045V89.7463H397.635L360.899 34.0223H360.28V89.7463H342.428V1.21045H358.095L394.543 56.8912H395.285V1.21045H413.055Z"
                                fill="white"
                            />
                            <path
                                d="M418.425 89.7463L432.443 1.21045H455.367L449.924 35.7948H480.27L485.712 1.21045H508.636L494.618 89.7463H471.694L477.136 55.162H446.791L441.349 89.7463H418.425Z"
                                fill="white"
                            />
                            <path
                                d="M540.238 1.21045L526.22 89.7463H503.296L517.315 1.21045H540.238Z"
                                fill="white"
                            />
                            <path
                                d="M571.985 1.21045L579.407 63.6352H580.066L607.278 1.21045H633.17L591.281 89.7463H559.946L546.093 1.21045H571.985Z"
                                fill="white"
                            />
                            <path
                                d="M625.079 89.7463L639.097 1.21045H699.952L696.819 20.5777H658.887L656.579 35.7948H691.377L688.243 55.162H653.445L651.136 70.3791H688.903L685.769 89.7463H625.079Z"
                                fill="white"
                            />
                        </svg>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map(page => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleClick}
                        >
                            {!anchorElNav ? <MenuIcon /> : <CloseIcon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
            {anchorElNav && (
                <div
                    id="header-nav"
                    className={
                        "collapse navbar-collapse " +
                        (anchorElNav ? "show" : "")
                    }
                >
                    <NavMenu setIsNavModalClose={handleCloseNavMenu} />
                </div>
            )}
        </AppBar>
    )
}
export default ResponsiveAppBar
