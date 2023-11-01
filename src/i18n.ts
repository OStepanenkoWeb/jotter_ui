import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            'Change language': 'Change the language used in the user interface.',
            'Start week description': 'This will change how all calendars in your app look.',
            'Organize by owner': 'Organize by owner, tags, verification, and more',
            'Set password': 'Set a permanent password to login to your account.',
            '2-step description': 'Add an additional layer of security to your account during login.',
            'Support access description': 'Grant Notion support temporary access to your account so we can\n' +
                ' troubleshoot problems or recover content on your behalf. You can\n' +
                ' revoke access at any time.',
            'Log out of all devices description': 'Log out of all other active sessions on other devices besides\n' +
                ' this one.',
            'Permanently delete description': 'Permanently delete the account and remove access from all\n' +
                ' workspace.'
        }
    },
    ru: {
        translation: {
            'Settings': 'Настройка',
            'Language & region': 'Язык & регион',
            'Language': 'Язык',
            'Change language': 'Измените язык, используемый в пользовательском интерфейсе.',
            'Start week on Monday': 'Начало недели в понедельник',
            'Start week description': 'Это изменит внешний вид всех календарей в вашем приложении.',
            'Account': 'Аккаунт',
            'My account': 'Мой аккаунт',
            'My notifications & settings': 'Мои уведомления & настройки',
            'My notifications': 'Мои уведомления',
            'My connections': 'Мои соединения',
            'Teamspaces': 'Командные пространства',
            'Members': 'Подписчики',
            'Upgrade': 'Обновление',
            'Billing': 'Биллинг',
            'Security': 'Безопасность',
            'Identity & Provisioning': 'Идентификация и обеспечение',
            'Connections': 'Соединения',
            'Import': 'Импорт',
            'Search': 'Поиск',
            'Updates': 'Обновления',
            'All teamspaces': 'Все командные пространства',
            'Settings & members': 'Настройки и участники',
            'New page': 'Новая страница',
            'Template': 'Шаблон',
            'Trash': 'Мусор',
            'Private': 'Личные',
            'Loading': 'Загрузка',
            'No pages inside': 'Нет страниц внутри',
            'Share': 'Поделиться',
            'Locked': 'Заблокировано',
            'Export': 'Экспорт',
            'Delete': 'Удалить',
            'Show deleted pages': 'Показать удаленные страницы',
            'Page analytics': 'Аналитика страниц',
            'Page history': 'История страницы',
            'Undo': 'Отменить',
            'Duplicate': 'Дублировать',
            'Copy link': 'Копировать ссылку',
            'Add to Favorites': 'Добавить в избранное',
            'Remove from Favorites': 'Удалить из Избранного',
            'Lock page': 'Заблокировать страницу',
            'Unlock page': 'Разблокировать страницу',
            'Customize page': 'Настроить страницу',
            'Move To': 'Переместить в',
            'new': 'новый',
            'Turn into wiki': 'Превратить в вики',
            'Organize by owner': 'Упорядочение по владельцу, тегам, проверке и т. д.',
            'Full width': 'Полная ширина',
            'Small text': 'Мелкий текст',
            'Style': 'Стиль',
            'Change cover': 'Изменить обложку',
            'Save': 'Сохранить',
            'Reposition': 'Переместить',
            'Add icon': 'Добавить иконку',
            'Add to': 'Добавить для',
            'Add cover': 'Добавить обложку',
            'Private Pages': 'Личные страницы',
            'Log out': 'Выйти',
            'Join or create workspace': 'Присоединяйтесь или создайте рабочую область',
            'Get Mac app': 'Получить приложение для Mac',
            'Add another account': 'Добавить еще одну учетную запись',
            'Add Photo': 'Добавить фото',
            'My profile': 'Мой профиль',
            'Preferred name': 'Предпочитаемое имя',
            'Change name': 'Изменить имя',
            'Change email': 'Изменить e-mail',
            'Password': 'Пароль',
            'Set password': 'Установите постоянный пароль для входа в свою учетную запись.',
            '2-step verification': 'двухэтапная проверка',
            '2-step description': 'Добавьте дополнительный уровень безопасности в свою учетную запись во время входа в систему.',
            'Support access': 'Поддержка доступа',
            'Support access description': 'Предоставьте Notion поддержку временного доступа к вашей учетной записи, чтобы мы могли\n' +
                ' устраняйте проблемы или восстанавливайте контент от вашего имени. Ты можешь\n' +
                ' отозвать доступ в любое время.',
            'Log out of all devices': 'Выйти со всех устройств',
            'Log out of all devices description': 'Выйдите из всех других активных сеансов на других устройствах, кроме\n' +
                ' этого.',
            'Delete my account': 'Удалите мой аккаунт',
            'Permanently delete description': 'Навсегда удалить учетную запись и закрыть доступ ко всему\n' +
                ' рабочему пространству.',
            'Mobile push notifications': 'Мобильные push-уведомления',
            'Email notifications': 'Уведомления по электронной почте',
            'Slack notifications': 'Slack уведомления',
            'My settings': 'Мои настройки',
            'Appearance': 'Вид',
            'Open on start': 'Открыть при запуске',
            'Customize cookies': 'Настроить файлы cookie',
            'See': 'Смотрите',
            'Cookie Notice': 'Уведомление о файлах cookie',
            'for details': 'для подробностей',
            'Customize': 'Настроить',
            'Show my view history': 'Показать мою историю просмотров',
            'Discover new connections': 'Откройте для себя новые связи',
            'My Connections': 'Мои связи',
            'Learn more about connections': 'Узнайте больше о подключениях',
            'Workspace settings': 'Настройки рабочей области',
            'Name': 'Название',
            'Teamspaces settings': 'Настройки Teamspaces'
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ru",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;