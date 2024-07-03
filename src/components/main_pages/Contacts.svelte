<h2>Contacts</h2>
<ul>
    <li>
        <a id="tg-link" class="text-link" href="https://t.me/limbo15">
            <img
                class="logo"
                src="../assets/icons/telegram.png"
                alt="Telegram Logo"
            />
            <span>Telegram</span>
        </a>
    </li>
    <li>
        <a id="gh-link" class="text-link" href="https://github.com/ebortsov">
            <img
                src="../assets/icons/github.png"
                alt="GitHub logo"
                class="logo"
            />
            <span>GitHub</span>
        </a>
    </li>
    <li>
        <a id="email" class="text-link" href="mailto:ebortsoff@yandex.ru">
            <img
                src="../assets/icons/yamail.png"
                alt="Yandex Mail Logo"
                class="logo"
            />
            <span>Email</span>
        </a>
    </li>
</ul>

<style>
    h2 {
        font-size: 2em;
        font-weight: bold;
        padding-left: 10px;
        padding-top: 20px;
    }
    ul {
        padding-left: 20px;
        display: flex;
        flex-direction: column;
    }
    ul li {
        display: block;
        height: 50px;
    }
    ul li a {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
    .text-link {
        color: rgb(40, 40, 214);
    }
    .text-link:hover {
        cursor: pointer;
        color: rgb(0, 0, 255);
    }
    main ul .logo {
        height: 1.2em;
    }
</style>
