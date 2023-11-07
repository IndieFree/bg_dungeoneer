var mainData = {
		dops: {
			1: "Гробница повелителя мертвых",
			2: "Царство Ледяной ведьмы"
		},
		hero: [
			{id: 1, name: "Лорел Аланис", hp: 6, str: [0, 0, 0, 0], mana: [1, 3, 5, 6], agil: [2, 3, 4, 4], dop: 1, race: ["Эльф", "Чародей"], limG: 1, limM: 4,
				spell: "<b>Магический талант</b>: вы можете потратить одно очко славы, чтобы перебросить кубик в магической битве.<br><br><b>Ограничение</b>: один раз в атаку."
			},
			{id: 2, name: "Рака", hp: 6, str: [1, 2, 3, 4], mana: [0, 1, 2, 2], agil: [2, 3, 4, 4], dop: 1, race: ["-", "Некровоин"], limG: 3, limM: 3,
				spell: "<b>Несмерт</b>: если ваше здоровье упало до 0, вы можете потратить 5 очков славы и сбросить руку, чтобы вернуться в игру как нежить 1-го уровня с 1 очком здоровья."
			},
			{id: 3, name: "Родерик Талус", hp: 6, str: [1, 2, 3, 4], mana: [0, 1, 2, 2], agil: [2, 3, 4, 4], dop: 1, race: ["Человек", "Паладин"], limG: 2, limM: 3,
				spell: "<b>Исцеляющая длань</b>: в свой ход можете потратить три очка славы и одно очко действия, чтобы восстановить одно очко здоровья.<br><br><b>Ограничение</b>: один раз в ход."
			},
			{id: 4, name: "Сибот", hp: 6, str: [0, 1, 2, 2], mana: [1, 2, 3, 4], agil: [2, 3, 4, 4], dop: 1, race: ["-", "Некромант"], limG: 2, limM: 3,
				spell: "<b>Повелитель нежити</b>: на этапе ответа вы можете потратить очки славы в количестве, равному стоимости очков риска значению одного атакующего вас монстра-нежити, чтобы он атаковал другого героя или монстра по вашему выбору, находящегося в той же локации, или просто проигнорировал вас.<br><br><b>Ограничение</b>: один раз в ход."
			},
			{id: 5, name: "Корн Кромсатель", hp: 6, str: [1, 3, 5, 6], mana: [0, 0, 0, 0], agil: [2, 3, 4, 4], dop: 1, race: ["Дварф", "Мститель"], limG: 4, limM: 1,
				spell: "<b>Возмездие</b>: потратьте два очка славы, чтобы бесплатно провести физическую атаку против соперника, который атаковал вас в этот ход. При этом вы получите +1 к вашей атаке.<br><br><b>Ограничение</b>: один раз в ход."
			},
			{id: 6, name: "Тейнин Легкоступ", hp: 6, str: [1, 2, 3, 4], mana: [0, 1, 2, 2], agil: [2, 3, 4, 4], dop: 1, race: ["Теневик", "Плут"], limG: 3, limM: 2,
				spell: "<b>Ускорение</b>: в свой ход вы можете потратить два очка славы, чтобы получить одно дополнительное действие в этом ходу.<br><br><b>Ограничение</b>: один раз в ход."
			},
			{id: 7, name: "Бодонс Винг", hp: 6, str: [1, 3, 4, 5], mana: [0, 0, 1, 1], agil: [2, 3, 4, 4], dop: 2, race: ["Человек", "Клинок войны"], limG: 3, limM: 2,
				spell: "<b>Неколебимость</b>: если ваш герой упал, можете потратить два очка славы, чтобы его поднять."
			},
			{id: 8, name: "Надалия", hp: 6, str: [0, 1, 2, 2], mana: [1, 2, 3, 4], agil: [2, 3, 4, 4], dop: 2, race: ["Полуэльф", "Воин-ведьма"], limG: 2, limM: 3,
				spell: "+1 к магической атаке в локации с заморозкой;<br><br><b>Оледенение</b>: получите два очка риска, чтобы добавить жетон заморозки в локацию, где находится ваш герой (на локации с пустыней не действует). В конце вашего хода уберите этот жетон."
			},
			{id: 9, name: "Тэвин Дрексис", hp: 6, str: [1, 2, 4, 5], mana: [0, 1, 1, 1], agil: [2, 3, 4, 4], dop: 2, race: ["Человек", "Ледяной клинок"], limG: 3, limM: 2,
				spell: "<b>Истребительница демонов</b>: +1 ко всем атакам против демонов."
			},
			{id: 10, name: "Оноку Кай", hp: 6, str: [0, 0, 1, 1], mana: [1, 3, 4, 5], agil: [2, 3, 4, 4], dop: 2, race: ["Человек", "Арктический шаман"], limG: 4, limM: 1,
				spell: "<b>Порыв арктических ветров</b>: потратьте любое количество славы. До конца этого хода выбранный монстр (столкновение) в вашей локации теряет столько же очков магической атаки.<br><br><b>Ограничение</b>: один раз в ход."
			},
			{id: 11, name: "Ригус Гар", hp: 6, str: [1, 2, 4, 4], mana: [0, 1, 1, 2], agil: [2, 3, 4, 4], dop: 2, race: ["Человек", "Разведчик севера"], limG: 1, limM: 4,
				spell: "<b>Арктические знания</b>: завершив ход в локации с заморозкой, возьмите на руку одну дополнительную карту в фазе сброса/добора карт."
			},
			{id: 12, name: "Энрака Тивус", hp: 6, str: [1, 1, 2, 2], mana: [0, 2, 3, 4], agil: [2, 3, 4, 4], dop: 2, race: ["Полунебожитель", "Валькирия"], limG: 3, limM: 2,
				spell: "<b>Демонический страж</b>: на этапе ответа вы можете потратить очки славы в количестве не больше очков риска значения одного атакующего вас демона. Игрок, сыгравший демона, должен дополнительно потратить столько же ваших очков риска, сколько вы потратили очков славы, иначе этот демон вернется к нему на руку.<br><br><b>Ограничение</b>: один раз в ход."
			}
		],
		quest: {
			d_1: [
				{id: 1, name: "Девушка в беде", category: "Эффект/Эскорт", degree: "", location: ["Святилище", "Любая улица"], prize: ["+1 уровень", "+3 очка славы", "вылечить 1 очко здоровья"],
					condition: "Если ваш герой находится в Святилище, поставьте на эту карту фишку (это девушка). Чтобы выполнить задание, вам нужно вывести девушку в любой проход.<br><br><b>Внимание</b>: пока вы ходите с девушкой у вас -1 очко действия каждый ход.",
					monster: null
				},
				{id: 2, name: "Волшебная рыбка", category: "Удача", degree: "", location: ["Мост троллей"], prize: ["+1 уровень", "+1 очко славы", "вылечить 1 очко здоровья"],
					condition: "Чтобы выполнить это задание, необходимо выбросить 5+ на кубике, встав на Мост троллей. Заплатив два очка славы, вы можете бросить сразу два кубика (учитывается лучший результат). Каждый бросок стоит одно очко действия.",
					monster: null
				},
				{id: 3, name: "Адское подношение", category: "Жертва", degree: "", location: ["Комната для вызова духов"], prize: ["+1 уровень", "+5 очков риска", "вылечить 1 очко здоровья"],
					condition: "Чтобы выполнить это задание, необходимо заплатить (4 Х уровень героя) очков славы, находясь в Комнате для вызова духов.<br><br><b>Внимание</b>: пока это задание не выполнено, все демоны получают +1 ко всем атакам.",
					monster: null
				},
				{id: 4, name: "Проклятие Ригга", category: "Жертва", degree: "", location: ["Целебный колодец"], prize: ["+1 уровень", "+2 очка риска", "вылечить 1 очко здоровья"],
					condition: "Чтобы выполнить это задание, необходимо сбросить карту преимущества, находясь у Целебного колодца. Вместо того, чтобы сбрасывать карту, вы можете отказаться от способности героя (положите на карту героя фишку, чтобы помнить, что способность не действует).",
					monster: null
				},
				{id: 5, name: "Освободите душу Кедмена", category: "Эффект/Эскорт", degree: "", location: ["Склеп", "Вход в гробницу"], prize: ["+1 уровень", "+1 очко славы", "вылечить 1 очко здоровья"],
					condition: "Придите в Склеп и поставьте фишку на эту карту (это душа). Затем вам нужно дойти до Входа в гробницу - и задание выполнено.<br><br><b>Внимание</b>: когда вы идете с душой Кедмена, нежить получает +1 ко всем атакам против вас.",
					monster: null
				},
				{id: 6, name: "Загадка Смува", category: "Удача", degree: "", location: ["Зеркальная комната"], prize: ["+1 уровень", "+1 очко славы", "вылечить 1 очко здоровья"],
					condition: "Чтобы выполнить это задание, придите в Зеркальную комнату. Загадайте число от 1 до 6 и бросьте два кубика. Если хотябы на одном выпадет загаданное число - задание выполнено. Заплатив два очка славы, вы можете бросить не два, а три кубика. Каждый бросок стоит одно очко действия.",
					monster: null
				},
				{id: 7, name: "Жертвоприношение", category: "Жертва", degree: "", location: ["Трон тирании"], prize: ["+1 уровень", "+2 очка риска"],
					condition: "Чтобы выполнить это задание, необходимо захватить Трон тирании и успешно кого-нибудь Тиранизировать.<br><br>При выполнении этой миссии вы получаете +1 к броскам на Тиранию.",
					monster: null
				},
				{id: 8, name: "Темная реликвия", category: "Эффект/Ловушка", degree: "", location: ["Логово чудища-со-щупальцами"], prize: ["+1 уровень", "+2 очка славы", "вылечить 1 очко здоровья"],
					condition: "Чтобы выполнить это задание, придите в Логово чудовища-со-щупальцами и пройдите проверку скорости 6+.<br><br><b>Неудача</b>: ваш герой падает. Каждая дополнительная попытка стоит одно очко действия (но сначала вы должны встать).",
					monster: null
				},
				{id: 9, name: "Потерявшийся волшебник", category: "Эффект/Эскорт", degree: "", location: ["Вход в святилище", "Библиотека"], prize: ["+1 уровень", "+1 очко славы", "вылечить 1 очко здоровья"],
					condition: "Если ваш герой зашел во вход в святилище, поставьте на эту карту фишку (это волшебник). Чтобы выполнить задание, вам нужно довести его до Библиотеки.<br><br><b>Внимание</b>: пока вы ходите с волшебником, у вас -1 к физической атаке каждый ход.",
					monster: null
				},
				{id: 10, name: "Упокойте Владимира", category: "Битва", degree: "", location: ["Склеп"], prize: ["+1 уровень", "+2 очка славы", "вылечить 1 очко здоровья"],
					condition: "Чтобы выполнить это задание, придите в Склеп и убейте Владимира.",
					monster: {hp: 1, str: 2, mana: 2, agil: 0, name: "Владимир", class: ["Монстр", "Нежить"], text: "Магическая атака: наносит 1 рану.", attck: ["mana"]}
				},
				{id: 11, name: "Убейте Нерда", category: "Битва", degree: "", location: ["Казармы"], prize: ["+1 уровень", "+2 очка славы", "вылечить 1 очко здоровья"],
					condition: "Чтобы выполнить это задание, придите в Казармы и убейте Нерда.",
					monster: {hp: 2, str: 1, mana: 1, agil: 1, name: "Нерд", class: ["Монстр", "Животное"], text: "Физическая атака: наносит 1 рану.", attck: ["str"]}
				},
				{id: 12, name: "Убейте Дрейка", category: "Битва", degree: "", location: ["Святилище"], prize: ["+1 уровень", "+2 очка славы", "вылечить 1 очко здоровья"],
					condition: "Чтобы выполнить это задание, придите в Святилище и убейте Дрейка.",
					monster: {hp: 1, str: 2, mana: 2, agil: 3, name: "Дрейк", class: ["Монстр", "Дракон"], text: "Физическая атака: наносит 1 рану.", attck: ["str"]}
				},
				{id: 13, name: "Уничтожьте отродье", category: "Битва", degree: "", location: ["Библиотека"], prize: ["+1 уровень", "+2 очка славы", "вылечить 1 очко здоровья"],
					condition: "Чтобы выполнить это задание придите в Библиотеку и уничтожьте Отродье.",
					monster: {hp: 1, str: 3, mana: 2, agil: 1, name: "Отродье", class: ["Монстр", "Демон"], text: "Магическая атака: наносит 1 рану.", attck: ["mana"]}
				},
				{id: 14, name: "Асассин Сеак", category: "Битва", degree: "", location: ["Поиск: 7+ в пустом проходе"], prize: ["+1 уровень", "+2 очка славы", "вылечить 1 очко здоровья"],
					condition: "Чтобы выполнить это задание, выбросите 7+ на кубике, находясь в пустом проходе (+1 за каждую клетку до стартовой локации). В ход можно делать только одну попытку. Каждая попытка стоит одно очко действия.",
					monster: {
						hp: 1, str: 3, mana: 3, agil: 3, name: "Сеак", class: ["Монстр", "Человек"],
						text: "Чтобы выполнить это задание, выбросите 7+ на кубике. находясь в пустом проходе (+1 за каждую клетку до стартовой локации). В ход можно делать только одну попытку. Каждая попытка стоит одно очко действия.<br><br><b>Апуналар</b>: при магической атаке наносит одну рану.",
						attck: ["agil"]
					}
				}
			],
			d_2: [
				// {id: 1, name: "???", category: "???", degree: "", location: [], prize: [],
				// 	condition: "",
				// 	monster: null
				// }
			]
		}
	};
