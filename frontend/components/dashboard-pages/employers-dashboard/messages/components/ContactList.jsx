import Image from "next/image";
import SearchBox from "./SearchBox";

const ChatboxContactList = () => {
    return (
        <ul className="contacts">
            <li>
                <a href="#">
                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                            <Image
                                src="/images/resource/candidate-1.png"
                                className="rounded-circle user_img"
                                alt="chatbox avatar"
                                width={90}
                                height={90}
                            />
                        </div>
                        <div className="user_info">
                            <span>Darlene Robertson</span>
                            <p> Head of Development</p>
                        </div>
                        <span className="info">35 mins</span>
                    </div>
                </a>
            </li>
            {/* End single Contact List */}

            <li>
                <a href="#">
                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                            <Image
                                src="/images/resource/candidate-2.png"
                                className="rounded-circle user_img"
                                alt="chatbox avatar"
                                width={90}
                                height={90}
                            />
                        </div>
                        <div className="user_info">
                            <span>Jane Cooper</span>
                            <p>Head of Development</p>
                        </div>
                        <span className="info">
                            35 mins <span className="count">2</span>
                        </span>
                    </div>
                </a>
            </li>
            {/* End single Contact List */}

            <li>
                <a href="#">
                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                            <Image
                                src="/images/resource/candidate-3.png"
                                className="rounded-circle user_img"
                                alt="chatbox avatar"
                                width={90}
                                height={90}
                            />
                        </div>
                        <div className="user_info">
                            <span>Arlene McCoy</span>
                            <p>Head of Development</p>
                        </div>
                        <span className="info">
                            35 mins <span className="count bg-success">2</span>
                        </span>
                    </div>
                </a>
            </li>
            {/* End single Contact List */}

            <li>
                <a href="#">
                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                            <Image
                                src="/images/resource/candidate-4.png"
                                className="rounded-circle user_img"
                                alt="chatbox avatar"
                                width={90}
                                height={90}
                            />
                        </div>
                        <div className="user_info">
                            <span>Albert Flores</span>
                            <p>Head of Development</p>
                        </div>
                        <span className="info">35 mins</span>
                    </div>
                </a>
            </li>
            {/* End single Contact List */}

            <li className="active">
                <a href="#">
                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                            <Image
                                src="/images/resource/candidate-5.png"
                                className="rounded-circle user_img"
                                alt="chatbox avatar"
                                width={90}
                                height={90}
                            />
                        </div>
                        <div className="user_info">
                            <span>Williamson</span>
                            <p>Head of Development</p>
                        </div>
                        <span className="info">
                            35 mins <span className="count bg-warning">2</span>
                        </span>
                    </div>
                </a>
            </li>
            {/* End single Contact List */}

            <li>
                <a href="#">
                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                            <Image
                                src="/images/resource/candidate-6.png"
                                className="rounded-circle user_img"
                                alt="chatbox avatar"
                                width={90}
                                height={90}
                            />
                        </div>
                        <div className="user_info">
                            <span>Kristin Watson</span>
                            <p>Head of Development</p>
                        </div>
                        <span className="info">35 mins</span>
                    </div>
                </a>
            </li>
            {/* End single Contact List */}

            <li>
                <a href="#">
                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                            <Image
                                src="/images/resource/candidate-7.png"
                                className="rounded-circle user_img"
                                alt="chatbox avatar"
                                width={90}
                                height={90}
                            />
                        </div>
                        <div className="user_info">
                            <span>Annette Black</span>
                            <p>Head of Development</p>
                        </div>
                        <span className="info">35 mins</span>
                    </div>
                </a>
            </li>
            {/* End single Contact List */}

            <li>
                <a href="#">
                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                            <Image
                                src="/images/resource/candidate-8.png"
                                className="rounded-circle user_img"
                                alt="chatbox avatar"
                                width={90}
                                height={90}
                            />
                        </div>
                        <div className="user_info">
                            <span>Jacob Jones</span>
                            <p>Head of Development</p>
                        </div>
                        <span className="info">35 mins</span>
                    </div>
                </a>
            </li>
            {/* End single Contact List */}
        </ul>
    );
};

export default ChatboxContactList;
