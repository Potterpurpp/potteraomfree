import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here, you would typically send the form data to the server
  };

  return (
    <div>
      <header>
        <h1>ติดต่อเรา</h1>
      </header>
      <section>
        <p>
          หากคุณมีข้อสงสัยหรือข้อเสนอแนะเกี่ยวกับการพัฒนาเกษตรกรรม โปรดติดต่อเราได้ทางแบบฟอร์มด้านล่าง
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">ชื่อ:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">อีเมล:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">ข้อความ:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">ส่งข้อความ</button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
