const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'content.json');
const INQUIRIES_FILE = path.join(__dirname, 'data', 'inquiries.json');
const publicDir = __dirname;

const defaultContent = {
  "companyName": "ООО «Константа»",
  "tagline": "Управляющая компания для комфортного и безопасного проживания",
  "yearsOnMarket": 14,
  "groupCompanies": [
    "ООО «Бизнес плюс»",
    "ООО «Респектабельность К»"
  ],
  "services": [
    {
      "id": "srv-1",
      "title": "Управление многоквартирными домами (МКД)",
      "description": "Комплексное управление жилищным фондом: содержание, текущий ремонт, взаимодействие с собственниками и контроль качества выполняемых работ."
    },
    {
      "id": "srv-2",
      "title": "Техническая эксплуатация зданий и сооружений",
      "description": "Плановый осмотр, техническое сопровождение, поддержание исправного состояния инженерных систем и соблюдение нормативных требований."
    },
    {
      "id": "srv-3",
      "title": "Электротехнические работы",
      "description": "Диагностика, замена и обслуживание электросетей, освещения, распределительных устройств и систем безопасности."
    },
    {
      "id": "srv-4",
      "title": "Сантехническое обслуживание и отопление",
      "description": "Ремонт и профилактика водоснабжения, канализации, отопления, санитарного оборудования и внутренних сетей здания."
    },
    {
      "id": "srv-5",
      "title": "Аварийно-диспетчерская служба 24/7",
      "description": "Оперативное реагирование на обращения, координация аварийных бригад и контроль сроков устранения неисправностей."
    },
    {
      "id": "srv-6",
      "title": "Благоустройство придомовых территорий",
      "description": "Уборка дворов, уход за зелеными насаждениями, сезонное обслуживание и поддержание чистоты на прилегающей территории."
    }
  ],
  "objects": [
    {
      "id": 1,
      "name": "Борисовская, д. 1А",
      "address": "Борисовская, д. 1А",
      "description": "Жилой дом с регулярным обслуживанием, контролем состояния общего имущества и организацией текущего ремонта по графику.",
      "image": "public/images/gallery/borisovskay.jpg",
      "photo": "public/images/gallery/borisovskay.jpg"
    },
    {
      "id": 2,
      "name": "Химки, Береговая 1А",
      "address": "Химки, Береговая 1А",
      "description": "Комфортное содержание жилого комплекса, эксплуатация инженерных систем и поддержание надлежащего состояния общего имущества.",
      "image": "public/images/gallery/Beregov.jpg",
      "photo": "public/images/gallery/Beregov.jpg"
    },
    {
      "id": 3,
      "name": "Жилой квартал на Береговой",
      "address": "Химки, Береговая 1, 8, 6, 4, 5",
      "description": "Комплексное обслуживание жилого квартала с контролем дворовых территорий, инженерных систем и взаимодействием с собственниками.",
      "image": "public/images/gallery/Beregov.jpg",
      "photo": "public/images/gallery/Beregov.jpg"
    },
    {
      "id": 4,
      "name": "Преображенская площадь",
      "address": "Преображенская площадь",
      "description": "Объект общественного назначения с проведением регулярных осмотров, управлением техническим состоянием и поддержанием порядка.",
      "image": "public/images/gallery/preobrazh.jpg",
      "photo": "public/images/gallery/preobrazh.jpg"
    },
    {
      "id": 5,
      "name": "Большая Черкизовская, д. 1",
      "address": "Большая Черкизовская, д. 1",
      "description": "МКД с плановым обслуживанием, ремонтом инженерного оборудования и постоянным контролем качества выполнения работ.",
      "image": "public/images/gallery/cherkiz.jpg",
      "photo": "public/images/gallery/cherkiz.jpg"
    }
  ],
  "advantages": [
    "14 лет опыта в управлении жилыми и коммерческими объектами",
    "Прозрачная коммуникация с собственниками и подрядчиками",
    "Комплексный подход к содержанию и эксплуатации помещений",
    "Постоянный контроль качества и сроков выполнения работ"
  ],
  "gallery": [
    {
      "id": 1,
      "src": "public/images/gallery/borisovskay.jpg",
      "image": "public/images/gallery/borisovskay.jpg",
      "photo": "public/images/gallery/borisovskay.jpg",
      "alt": "Жилой дом по адресу: Борисовская, д. 1А"
    },
    {
      "id": 2,
      "src": "public/images/gallery/Beregov.jpg",
      "image": "public/images/gallery/Beregov.jpg",
      "photo": "public/images/gallery/Beregov.jpg",
      "alt": "Жилой комплекс в г. Химки, ул. Береговая"
    },
    {
      "id": 3,
      "src": "public/images/gallery/preobrazh.jpg",
      "image": "public/images/gallery/preobrazh.jpg",
      "photo": "public/images/gallery/preobrazh.jpg",
      "alt": "Объект на Преображенской площади"
    },
    {
      "id": 4,
      "src": "public/images/gallery/cherkiz.jpg",
      "image": "public/images/gallery/cherkiz.jpg",
      "photo": "public/images/gallery/cherkiz.jpg",
      "alt": "МКД Большая Черкизовская, д. 1"
    },
    {
      "id": 5,
      "src": "public/images/gallery/gallery-itp.jpg",
      "image": "public/images/gallery/gallery-itp.jpg",
      "photo": "public/images/gallery/gallery-itp.jpg",
      "alt": "Индивидуальный тепловой пункт (ИТП) и инженерные узлы"
    },
    {
      "id": 6,
      "src": "public/images/gallery/gallery-blago.jpg",
      "image": "public/images/gallery/gallery-blago.jpg",
      "photo": "public/images/gallery/gallery-blago.jpg",
      "alt": "Благоустройство придомовой территории и двора"
    }
  ],
  "team": [
    {
      "id": "team-1",
      "name": "Константинов Сергей Викторович",
      "role": "Генеральный директор",
      "experience": "Стаж в сфере ЖКХ более 16 лет",
      "image": "public/images/team/Sergey_Viktorovich.jpg",
      "photo": "public/images/team/Sergey_Viktorovich.jpg"
    },
    {
      "id": "team-2",
      "name": "Морозов Андрей Ильич",
      "role": "Главный инженер",
      "experience": "Аттестованный специалист по инженерным системам МКД",
      "image": "public/images/team/Morozov.jpg",
      "photo": "public/images/team/Morozov.jpg"
    },
    {
      "id": "team-3",
      "name": "Соколова Елена Павловна",
      "role": "Руководитель диспетчерской службы",
      "experience": "Контроль оперативного реагирования 24/7",
      "image": "public/images/team/Sokolova.jpg",
      "photo": "public/images/team/Sokolova.jpg"
    },
    {
      "id": "team-4",
      "name": "Иванов Игорь Николаевич",
      "role": "Главный энергетик",
      "experience": "Ответственный за электрохозяйство и безопасность",
      "image": "public/images/team/Igro_Nikolaevich.jpg",
      "photo": "public/images/team/Igro_Nikolaevich.jpg"
    }
  ],
  "news": [
    {
      "id": "news-1",
      "title": "Плановая подготовка к отопительному сезону завершена",
      "date": "10.10.2024",
      "text": "Инженерной службой проведена гидравлическая опрессовка сетей и ревизия запорной арматуры на всех обслуживаемых объектах."
    },
    {
      "id": "news-2",
      "title": "Внедрение единого регламента обработки диспетчерских заявок",
      "date": "24.09.2024",
      "text": "Диспетчерская служба переведена на усиленный круглосуточный режим с автоматическим контролем сроков закрытия заявок."
    }
  ],
  "contacts": {
    "phone": "+7 (495) 000-00-00",
    "email": "info@konstanta.ru",
    "officeAddress": "г. Москва, ул. Большая Черкизовская, д. 1",
    "workHours": "Пн-Пт: 09:00 - 18:00 (Аварийная служба: круглосуточно)"
  }
};

function readContent() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    const dir = path.dirname(DATA_FILE);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(defaultContent, null, 2), 'utf8');
    return defaultContent;
  }
}

function writeContent(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function saveInquiry(inquiry) {
  try {
    let list = [];
    if (fs.existsSync(INQUIRIES_FILE)) {
      list = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf8') || '[]');
    }
    list.unshift({ id: Date.now(), ...inquiry, date: new Date().toISOString() });
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(list, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to save inquiry to file:', err);
  }
}

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicDir));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/contacts', (req, res) => {
  res.sendFile(path.join(publicDir, 'contacts.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(publicDir, 'admin.html'));
});

app.get('/api/content', (req, res) => {
  const content = readContent();
  res.json(content);
});

app.post('/api/content', (req, res) => {
  const incoming = req.body || {};
  const current = readContent();
  const merged = {
    ...current,
    ...incoming,
    contacts: { ...current.contacts, ...(incoming.contacts || {}) },
    services: Array.isArray(incoming.services) ? incoming.services : current.services,
    objects: Array.isArray(incoming.objects) ? incoming.objects : current.objects,
    gallery: Array.isArray(incoming.gallery) ? incoming.gallery : current.gallery,
    team: Array.isArray(incoming.team) ? incoming.team : current.team,
    news: Array.isArray(incoming.news) ? incoming.news : current.news,
    advantages: Array.isArray(incoming.advantages) ? incoming.advantages : current.advantages,
    groupCompanies: Array.isArray(incoming.groupCompanies) ? incoming.groupCompanies : current.groupCompanies
  };

  writeContent(merged);
  res.json({ success: true, message: 'Контент успешно обновлён.' });
});

app.get('/api/inquiries', (req, res) => {
  try {
    if (fs.existsSync(INQUIRIES_FILE)) {
      const list = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf8') || '[]');
      return res.json(list);
    }
    res.json([]);
  } catch (err) {
    res.json([]);
  }
});

app.delete('/api/inquiries', (req, res) => {
  try {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2), 'utf8');
    res.json({ success: true, message: 'Все заявки успешно очищены.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Не удалось очистить заявки.' });
  }
});

app.delete('/api/inquiries/:id', (req, res) => {
  try {
    const id = req.params.id;
    if (fs.existsSync(INQUIRIES_FILE)) {
      const list = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf8') || '[]');
      const filtered = list.filter((item, idx) => {
        if (item.id !== undefined && item.id !== null) {
          return String(item.id) !== String(id);
        }
        return String(idx) !== String(id);
      });
      fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(filtered, null, 2), 'utf8');
    }
    res.json({ success: true, message: 'Заявка успешно удалена.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Не удалось удалить заявку.' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, subject, message } = req.body || {};

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ success: false, message: 'Пожалуйста, заполните обязательные поля.' });
  }

  const inquiryData = { name, phone, email, subject: subject || 'Общий вопрос', message };
  saveInquiry(inquiryData);

  const emailTo = process.env.EMAIL_TO || 'info@konstanta.ru';
  const mailBody = {
    from: `"${name}" <${email}>`,
    to: emailTo,
    subject: `Обращение с сайта: ${subject || 'Общий вопрос'}`,
    text: `Имя: ${name}\nТелефон: ${phone}\nE-mail: ${email}\nТема: ${subject || 'Общий вопрос'}\n\nСообщение:\n${message}`
  };

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const isPlaceholderSmtp = !host || !user || !pass ||
    user.includes('example.com') ||
    user.includes('your_email') ||
    pass === 'your_password';

  if (isPlaceholderSmtp) {
    console.log('Обращение принято и сохранено в базу (SMTP в демо-режиме):', mailBody);
    return res.json({
      success: true,
      message: 'Ваше обращение принято и зарегистрировано в диспетчерской службе.'
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true') === 'true',
      auth: { user, pass }
    });

    await transporter.sendMail(mailBody);
    res.json({ success: true, message: 'Сообщение успешно отправлено.' });
  } catch (error) {
    console.error('Mail sending error (saved locally):', error);
    res.json({
      success: true,
      message: 'Ваше обращение принято и зарегистрировано в диспетчерской службе.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
