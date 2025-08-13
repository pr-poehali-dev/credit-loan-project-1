import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HowToChooseSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
          <Icon name="Target" className="w-6 h-6 text-orange-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 m-0">
          Как выбрать выгодный потребительский кредит
        </h2>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Критерии выбора лучшего предложения
        </h3>
        <p className="text-gray-700 mb-6">
          При выборе потребительского кредита обращайте внимание на:
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
            Процентную ставку
          </h4>
          <p className="text-gray-700">
            Ищите предложения с низкой процентной ставкой. Разница даже в 1-2% может существенно повлиять на переплату.
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
            Полную стоимость кредита (ПСК)
          </h4>
          <p className="text-gray-700">
            ПСК включает все расходы по кредиту: проценты, комиссии, страховки.
          </p>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
            Дополнительные услуги
          </h4>
          <p className="text-gray-700">
            Некоторые банки навязывают страховки и дополнительные услуги, увеличивающие стоимость кредита.
          </p>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
            Досрочное погашение
          </h4>
          <p className="text-gray-700">
            Проверьте возможность досрочного погашения без комиссий.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Icon name="TrendingDown" className="w-5 h-5 text-green-600 mr-2" />
          Потребительский кредит с низкой процентной ставкой
        </h4>
        <p className="text-gray-700 mb-4">
          Самые низкие ставки по потребительским кредитам предлагают:
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Icon name="Users" className="w-4 h-4 text-blue-500" />
            <span className="text-gray-700">Банки для зарплатных клиентов: ставки от 4,5-6%</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Building" className="w-4 h-4 text-green-500" />
            <span className="text-gray-700">Банки с государственным участием: Сбербанк, ВТБ</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="MapPin" className="w-4 h-4 text-purple-500" />
            <span className="text-gray-700">Региональные банки: часто предлагают конкурентные условия</span>
          </div>
        </div>
      </div>

      {/* Секция с банками-партнерами */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mt-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full mb-4">
            <Icon name="Building2" size={20} />
            <span className="font-semibold">Банки-партнёры</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Потребительские кредиты от ведущих банков</h3>
          <p className="text-gray-600">Выгодные условия и быстрое одобрение</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Сбербанк */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-green-200 bg-white p-4">
            <div className="absolute top-0 right-0 w-16 h-16 bg-green-500 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md border border-gray-200">
                <img 
                  src="https://cdn.poehali.dev/files/f70038da-d6dd-4e66-a474-947315ef3e89.jpg" 
                  alt="Сбербанк" 
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Сбербанк</h4>
              <p className="text-xs font-medium text-green-700 mb-3">Потребительский кредит</p>
              
              <div className="bg-green-50 rounded-lg p-2 mb-3">
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-bold text-green-600">от 4.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-bold">до 5 млн ₽</span>
                  </div>
                </div>
              </div>
              
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white text-xs">
                Получить кредит
              </Button>
            </div>
          </Card>

          {/* Т-Банк */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-yellow-200 bg-white p-4">
            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md border border-gray-200">
                <img 
                  src="https://cdn.poehali.dev/files/e77b493b-0c8f-415a-8cdb-d22ea975836f.jpg" 
                  alt="Т-Банк" 
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Т-Банк</h4>
              <p className="text-xs font-medium text-yellow-700 mb-3">Потребительский кредит</p>
              
              <div className="bg-yellow-50 rounded-lg p-2 mb-3">
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-bold text-yellow-600">от 11%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-bold">до 5 млн ₽</span>
                  </div>
                </div>
              </div>
              
              <Button size="sm" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-xs">
                Получить кредит
              </Button>
            </div>
          </Card>

          {/* Банк ЗЕНИТ */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-blue-200 bg-white p-4">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md border border-gray-200">
                <span className="text-blue-600 font-bold text-sm">З</span>
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Банк ЗЕНИТ</h4>
              <p className="text-xs font-medium text-blue-700 mb-3">Потребительский кредит</p>
              
              <div className="bg-blue-50 rounded-lg p-2 mb-3">
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-bold text-blue-600">от 8.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-bold">до 3 млн ₽</span>
                  </div>
                </div>
              </div>
              
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs">
                Получить кредит
              </Button>
            </div>
          </Card>

          {/* Совкомбанк */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-red-200 bg-white p-4">
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-500 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md border border-gray-200">
                <img 
                  src="https://cdn.poehali.dev/files/1c25f927-7d45-4cd8-99f5-cf64c1621436.jpg" 
                  alt="Совкомбанк" 
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Совкомбанк</h4>
              <p className="text-xs font-medium text-red-700 mb-3">Потребительский кредит</p>
              
              <div className="bg-red-50 rounded-lg p-2 mb-3">
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-bold text-red-600">от 13%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-bold">до 5 млн ₽</span>
                  </div>
                </div>
              </div>
              
              <Button 
                size="sm" 
                className="w-full bg-red-600 hover:bg-red-700 text-white text-xs"
                asChild
              >
                <a 
                  href="https://go.leadgid.ru/aff_c?aff_id=132201&offer_id=5199&p=9546&erid=2W5zFGFFjxt"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Получить кредит
                </a>
              </Button>
            </div>
          </Card>

          {/* АТБ */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-purple-200 bg-white p-4">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md border border-gray-200">
                <span className="text-purple-600 font-bold text-sm">А</span>
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1">АТБ</h4>
              <p className="text-xs font-medium text-purple-700 mb-3">Потребительский кредит</p>
              
              <div className="bg-purple-50 rounded-lg p-2 mb-3">
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-bold text-purple-600">от 12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-bold">до 2 млн ₽</span>
                  </div>
                </div>
              </div>
              
              <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs">
                Получить кредит
              </Button>
            </div>
          </Card>

          {/* Альфа-Банк */}
          <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-red-200 bg-white p-4">
            <div className="absolute top-0 right-0 w-16 h-16 bg-red-500 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative text-center">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md border border-gray-200">
                <img 
                  src="https://cdn.poehali.dev/files/c0084308-d657-4a0a-b294-2b5a1839e38a.png" 
                  alt="Альфа-Банк" 
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-1">Альфа-Банк</h4>
              <p className="text-xs font-medium text-red-700 mb-3">Потребительский кредит</p>
              
              <div className="bg-red-50 rounded-lg p-2 mb-3">
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ставка:</span>
                    <span className="font-bold text-red-600">от 19.99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Сумма:</span>
                    <span className="font-bold">до 5 млн ₽</span>
                  </div>
                </div>
              </div>
              
              <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 text-white text-xs">
                Получить кредит
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowToChooseSection;