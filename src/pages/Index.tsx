import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      icon: 'Building2',
      title: 'Монолитное строительство',
      description: 'Возведение зданий и сооружений из монолитного железобетона'
    },
    {
      icon: 'Hammer',
      title: 'Промышленное строительство',
      description: 'Строительство заводов, складов и производственных комплексов'
    },
    {
      icon: 'Home',
      title: 'Жилищное строительство',
      description: 'Многоэтажные жилые дома и коттеджные поселки'
    },
    {
      icon: 'Settings',
      title: 'Реконструкция',
      description: 'Модернизация и капитальный ремонт существующих объектов'
    },
    {
      icon: 'HardHat',
      title: 'Инженерные системы',
      description: 'Проектирование и монтаж коммуникаций'
    },
    {
      icon: 'Truck',
      title: 'Инфраструктурные проекты',
      description: 'Дороги, мосты, транспортные развязки'
    }
  ];

  const advantages = [
    {
      number: '15+',
      text: 'лет опыта в строительстве'
    },
    {
      number: '200+',
      text: 'успешно завершенных проектов'
    },
    {
      number: '50+',
      text: 'квалифицированных специалистов'
    },
    {
      number: '24/7',
      text: 'техническая поддержка объектов'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-construction-dark text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/img/e62914cc-e896-47c7-add7-aac7f0fcc7cc.jpg" 
              alt="Монолитстрой МСК" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="font-roboto-condensed font-bold text-xl">ООО МОНОЛИТСТРОЙ МСК</h1>
              <p className="font-open-sans text-sm text-gray-300">Профессиональное строительство с 2009 года</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="font-open-sans hover:text-construction-red transition-colors">Услуги</a>
            <a href="#about" className="font-open-sans hover:text-construction-red transition-colors">О компании</a>
            <a href="#contact" className="font-open-sans hover:text-construction-red transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-construction-dark to-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-roboto-condensed text-5xl md:text-6xl font-bold mb-6">
            НАДЕЖНОЕ СТРОИТЕЛЬСТВО<br />
            <span className="text-construction-red">ВАШЕГО БУДУЩЕГО</span>
          </h2>
          <p className="font-open-sans text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Специализируемся на монолитном строительстве промышленных, 
            жилых и коммерческих объектов в Москве и Московской области
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-construction-red hover:bg-red-700 font-open-sans text-lg px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-construction-dark font-open-sans text-lg px-8 py-3">
              <Icon name="FileText" className="mr-2" size={20} />
              Наши проекты
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-roboto-condensed text-4xl font-bold text-construction-dark mb-4">
              НАШИ СПЕЦИАЛИЗАЦИИ
            </h3>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр строительных услуг от проектирования до сдачи объекта под ключ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-construction-red">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-construction-red p-3 rounded-lg">
                      <Icon name={service.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-roboto-condensed text-xl font-bold text-construction-dark mb-2">
                        {service.title}
                      </h4>
                      <p className="font-open-sans text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-roboto-condensed text-4xl font-bold text-construction-dark mb-6">
                О КОМПАНИИ
              </h3>
              <p className="font-open-sans text-lg text-gray-700 mb-6">
                ООО «Монолитстрой МСК» — ведущая строительная компания, специализирующаяся 
                на возведении монолитных конструкций любой сложности. Мы работаем на рынке 
                строительных услуг более 15 лет и за это время зарекомендовали себя как 
                надежный партнер для реализации проектов различного масштаба.
              </p>
              <p className="font-open-sans text-lg text-gray-700 mb-8">
                Наша команда состоит из высококвалифицированных инженеров, архитекторов 
                и строителей, которые используют передовые технологии и современное 
                оборудование для достижения наилучших результатов.
              </p>
              <Button className="bg-construction-red hover:bg-red-700 font-open-sans">
                <Icon name="Users" className="mr-2" size={20} />
                Познакомиться с командой
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="font-roboto-condensed text-4xl font-bold text-construction-red mb-2">
                    {advantage.number}
                  </div>
                  <div className="font-open-sans text-construction-dark">
                    {advantage.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-construction-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-roboto-condensed text-3xl font-bold mb-4">
            ГОТОВЫ НАЧАТЬ ВАШ ПРОЕКТ?
          </h3>
          <p className="font-open-sans text-lg mb-8 text-gray-300">
            Свяжитесь с нами для бесплатной консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-construction-red hover:bg-red-700 font-open-sans text-lg px-8 py-3">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (495) 000-00-00
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-construction-dark font-open-sans text-lg px-8 py-3">
              <Icon name="Mail" className="mr-2" size={20} />
              info@monolitstroy-msk.ru
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-roboto-condensed text-xl font-bold mb-4">ООО МОНОЛИТСТРОЙ МСК</h4>
              <p className="font-open-sans text-gray-400 mb-4">
                Профессиональное строительство монолитных конструкций в Москве и области
              </p>
              <div className="flex space-x-4">
                <Icon name="MapPin" size={16} className="text-construction-red mt-1" />
                <span className="font-open-sans text-sm text-gray-400">
                  г. Москва, ул. Строительная, д. 1
                </span>
              </div>
            </div>
            
            <div>
              <h5 className="font-roboto-condensed text-lg font-bold mb-4">Услуги</h5>
              <ul className="space-y-2 font-open-sans text-sm text-gray-400">
                <li>Монолитное строительство</li>
                <li>Промышленные объекты</li>
                <li>Жилые комплексы</li>
                <li>Реконструкция зданий</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-roboto-condensed text-lg font-bold mb-4">Контакты</h5>
              <div className="space-y-2 font-open-sans text-sm text-gray-400">
                <div>Телефон: +7 (495) 000-00-00</div>
                <div>Email: info@monolitstroy-msk.ru</div>
                <div>Режим работы: пн-пт 9:00-18:00</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="font-open-sans text-sm text-gray-400">
              © 2024 ООО Монолитстрой МСК. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}