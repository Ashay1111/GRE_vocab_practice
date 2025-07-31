    document.addEventListener('DOMContentLoaded', () => {

const vocabularyData = {
    "abash": "to make ashamed; to embarrass",
    "abate": "to reduce in amount, degree, or severity",
    "abdicate": "to renounce or relinquish a throne",
    "aberrant": "deviating from what is normal or expected",
    "abeyance": "a state of temporary disuse or suspension",
    "abject": "miserable; pitiful",
    "abjure": "to renounce, repudiate under oath; to avoid, shun",
    "abnegate": "To renounce or reject (something desired or valuable)",
    "abrogate": "to abolish by formal or official means",
    "abscond": "to leave secretly",
    "abstemious": "moderate in appetite",
    "abstruse": "difficult to understand; obscure",
    "abysmal": "extremely bad; appalling",
    "accede": "to agree to a demand, request, or treaty",
    "accolade": "tribute; honor; praise",
    "accrete": "to grow by accumulation or coalescence",
    "acerbic": "biting, bitter in tone or taste",
    "acme": "highest point; summit",
    "acumen": "keen insight",
    "adduce": "to cite as evidence",
    "adroit": "skillful, expert in the use of the hands or mind",
    "adulation": "high praise",
    "adulterate": "to make impure; to contaminate",
    "advent": "the arrival of a notable person, thing, or event",
    "aesthetic": "concerned with beauty or the appreciation of beauty",
    "affable": "friendly, good-natured, or easy to talk to",
    "affectation": "behavior, speech, or writing that is artificial and designed to impress",
    "aggrandize": "to increase in power, influence, and reputation",
    "aggregate": "a whole formed by combining several separate elements",
    "aghast": "filled with horror or shock",
    "alacrity": "cheerful readiness; promptness in response",
    "alchemy": "medieval chemical philosophy based on changing metal into gold; a seemingly magical power or process of transmutation",
    "allege": "to claim or assert that someone has done something illegal or wrong, typically without proof",
    "allusion": "an expression designed to call something to mind without mentioning it explicitly; an indirect or passing reference",
    "amalgamate": "to combine; to mix together",
    "ambience": "the character and atmosphere of a place",
    "ambiguous": "unclear or doubtful in meaning",
    "ambivalent": "having mixed feelings or contradictory ideas about something or someone",
    "ameliorate": "to make better; to improve",
    "amenable": "agreeable; cooperative; suited",
    "amiable": "having or displaying a friendly and pleasant manner",
    "amorphous": "without a clearly defined shape or form",
    "anachronism": "something out of place in time",
    "anathema": "a cursed, detested person",
    "ancillary": "providing necessary support to the primary activities or operation of an organization, institution, industry, or system",
    "animosity": "strong hostility",
    "anomaly": "deviation from what is standard, normal, or expected",
    "antecedent": "a thing or event that existed before or logically precedes another",
    "antipathy": "a deep-seated feeling of dislike; aversion",
    "antithesis": "a person or thing that is the direct opposite of someone or something else",
    "apex": "the top or highest part of something, especially one forming a point",
    "aphorism": "a pithy observation that contains a general truth, such as, “if it ain't broke, don't fix it.”",
    "apocryphal": "of questionable authority or authenticity",
    "apostasy": "the abandonment or renunciation of a religious or political belief",
    "apostate": "one who renounces a religious faith",
    "apposite": "apt in the circumstances or in relation to something",
    "approbation": "praise; approval",
    "appropriate": "to take possession for one's own use; confiscate",
    "arbiter": "a person who settles a dispute or has ultimate authority in a matter",
    "arcane": "mysterious; secret",
    "archaic": "very old or old-fashioned",
    "archetype": "a very typical example of a certain person or thing",
    "arduous": "difficult; requiring much effort",
    "arrant": "complete, utter",
    "ascetic": "practicing self-denial; austere",
    "assuage": "to make something unpleasant less severe",
    "astringent": "harsh; severe; stern",
    "astute": "having or showing an ability to accurately assess situations or people and turn this to one's advantage",
    "attrition": "the action or process of gradually reducing the strength or effectiveness of someone or something through sustained attack or pressure",
    "audacious": "fearless and daring",
    "augment": "to increase",
    "auspicious": "conducive to success; favorable",
    "austere": "severe or strict in manner, attitude, or appearance",
    "avarice": "greed",
    "aver": "to affirm; declare to be true",
    "avow": "to assert or confess openly",
    "axiom": "premise; postulate; self-evident truth",
    "axiomatic": "self-evident or unquestionable",
    "banal": "commonplace; trite",
    "belabor": "to argue or elaborate (a subject) in excessive detail",
    "beleaguer": "to cause problems or difficulties for",
    "belie": "to contradict; misrepresent; give a false impression",
    "benign": "kindly; gentle; harmless",
    "bereave": "be deprived of a loved one through a profound absence, especially due to the loved one's death",
    "blithe": "joyful, cheerful, or without appropriate thought",
    "bolster": "to support; to prop up",
    "bombast": "pompous in speech and manner",
    "bombastic": "pompous in speech and manner",
    "broach": "to bring up a subject for discussion",
    "brook": "to tolerate or allow (something, typically dissent or opposition)",
    "bucolic": "pastoral; rural",
    "burgeon": "to grow and flourish",
    "cacophony": "jarring, unpleasant noise",
    "callow": "without experience; immature, not fully developed; lacking sophistication and poise",
    "canon": "a general law, rule, principle, or criterion by which something is judged",
    "canonical": "included in the list of sacred books officially accepted as genuine",
    "capricious": "impulsive and unpredictable",
    "cardinal": "of the greatest importance; fundamental",
    "castigation": "severe criticism or punishment",
    "catalyst": "something that brings about a change in something else",
    "catholic": "including a wide variety of things; all-embracing",
    "caustic": "biting in wit",
    "censure": "to criticize harshly",
    "chagrin": "distress or embarrassment at having failed or been humiliated",
    "chary": "wary; cautious; sparing",
    "chicanery": "deception by means of craft or guile",
    "choleric": "bad-tempered or irritable",
    "circumspect": "cautious; wary",
    "coalesce": "to grow together to form a single mass",
    "coda": "a concluding event, remark, or section",
    "cogent": "convincing; reasonable",
    "cognizant": "having knowledge or being aware of",
    "collusion": "secret or illegal cooperation or conspiracy, especially in order to cheat or deceive others",
    "commensurate": "proportional",
    "complaisance": "the willingness to please others; politeness",
    "conciliatory": "intended or likely to placate or pacify",
    "connoisseur": "a person with expert knowledge or discriminating tastes",
    "consecrate": "to make or declare (something, typically a church) sacred; dedicate formally to a religious or divine purpose",
    "consonant": "in agreement or harmony with",
    "consummate": "showing a high degree of skill and flair; complete or perfect",
    "contentious": "quarrelsome; controversial",
    "contiguous": "sharing a common border; touching",
    "contrite": "deeply sorrowful and repentant for a wrong",
    "contumely": "insolent or insulting language or treatment",
    "convention": "a way in which something is usually done, especially within a particular area or activity",
    "convoluted": "intricate and complicated",
    "convivial": "friendly, lively, and enjoyable",
    "copious": "abundant in supply or quantity",
    "corroborate": "to confirm or give support to (a statement, theory, or finding)",
    "coterie": "a small group of people with shared interests or tastes, especially one that is exclusive of other people",
    "countenance": "a person's face or facial expression",
    "covet": "to desire something belonging to another",
    "credulous": "gullible; trusting",
    "culpable": "deserving blame",
    "cull": "to select from a large quantity; obtain from a variety of sources",
    "cursory": "hasty and therefore not thorough or detailed",
    "cynicism": "an inclination to believe that people are motivated purely by self-interest; skepticism",
    "daunt": "to make (someone) feel intimidated or apprehensive",
    "dearth": "a scarcity or lack of something",
    "debacle": "a sudden and ignominious failure; a fiasco",
    "debauchery": "excessive indulgence in sensual pleasures",
    "decorous": "in keeping with good taste and propriety; polite and restrained",
    "decorum": "proper behavior",
    "deleterious": "causing harm or damage",
    "deluge": "a severe flood",
    "demur": "to object or show reluctance",
    "deprecate": "to express disapproval of",
    "derision": "ridicule; mockery",
    "desiccate": "to dry out thoroughly",
    "diatribe": "an abusive, condemnatory speech",
    "didactic": "intended to teach, particularly in having moral instruction as an ulterior motive",
    "dilettante": "someone with an amateurish and superficial interest in a topic",
    "dilapidated": "in a state of disrepair or ruin as a result of age or neglect",
    "disabuse": "to set right; to free from error",
    "discomfit": "to make (someone) feel uneasy or embarrassed",
    "discordant": "disagreeing or incongruous",
    "discourse": "written or spoken communication or debate",
    "discretion": "the quality of being discreet",
    "disinterested": "impartial; unbiased",
    "disparage": "to belittle",
    "disparate": "fundamentally different; entirely unlike",
    "dissemble": "to conceal one's true motives, feelings, or beliefs",
    "divulge": "to make known (private or sensitive information)",
    "doggerel": "verse or words that are badly written or expressed",
    "dogmatic": "inclined to lay down principles as incontrovertibly true",
    "ebullience": "the quality of being cheerful and full of energy; exuberance",
    "eccentric": "unconventional and slightly strange",
    "eclectic": "deriving ideas, style, or taste from a broad and diverse range of sources",
    "effrontery": "rude or impertinent behavior",
    "egregious": "outstandingly bad; shocking",
    "elegy": "a sad or mournful poem",
    "eloquent": "fluent or persuasive in speaking or writing",
    "elucidate": "to make (something) clear; explain",
    "emollient": "soothing; mollifying",
    "empirical": "based on observation or experience rather than theory or pure logic",
    "endemic": "regularly found among particular people or in a certain area",
    "enervate": "to weaken",
    "enigmatic": "difficult to interpret or understand; mysterious",
    "ennui": "boredom",
    "enormity": "the great or extreme scale, seriousness, or extent of something perceived as bad or morally wrong",
    "ephemeral": "lasting for a very short time",
    "epicure": "a person who takes particular pleasure in fine food and drink",
    "epitome": "a person or thing that is a perfect example of a particular quality or type",
    "equanimity": "mental calmness, composure, and evenness of temper, especially in a difficult situation",
    "equivocate": "to use ambiguous language so as to conceal the truth or avoid committing oneself",
    "erudite": "learned; scholarly",
    "eschew": "to deliberately avoid using; abstain from",
    "esoteric": "intended for or likely to be understood by only a small number of people with a specialized knowledge or interest",
    "espouse": "to adopt or support (a cause, belief, or way of life)",
    "eulogy": "a speech in praise of someone",
    "evanescent": "soon passing out of sight, memory, or existence; quickly fading or disappearing",
    "evince": "to reveal the presence of (a quality or feeling)",
    "exacerbate": "to make worse",
    "exculpate": "to clear from blame; prove innocent",
    "exhort": "to strongly encourage or urge (someone) to do something",
    "exigent": "pressing; demanding",
    "exonerate": "to clear of blame",
    "exposition": "a comprehensive description and explanation of an idea or theory",
    "extemporaneous": "spoken or done without preparation",
    "extol": "to praise enthusiastically",
    "facile": "easily achieved; effortless",
    "fallacy": "a mistaken belief, especially one based on unsound argument",
    "fatuous": "silly and pointless",
    "fawn": "to flatter or behave in a servile manner",
    "fervent": "very earnest, emotional, passionate; extremely hot",
    "fetter": "to restrain with chains or manacles, typically around the ankles",
    "filibuster": "a tactic for delaying or obstructing legislation by making long speeches",
    "flag": "to decline in vigor, strength, or interest",
    "flippant": "not showing a serious or respectful attitude",
    "flout": "to openly disregard (a rule, law or convention)",
    "foment": "to instigate or stir up (an undesirable or violent sentiment or course of action)",
    "forbear": "to politely or patiently restrain an impulse to do something; refrain",
    "fortuitous": "happening by a lucky chance",
    "founder": "to fail; to collapse; to sink",
    "fulminate": "to express vehement protest",
    "fulsome": "complimentary or flattering to an excessive degree",
    "furtive": "secretive; stealthy",
    "gainsay": "to deny or contradict (a fact or statement)",
    "gambit": "a device, action, or opening remark, typically one entailing a degree of risk, that is calculated to gain an advantage",
    "garrulous": "excessively talkative, especially on trivial matters",
    "genial": "friendly and cheerful",
    "germane": "relevant to a subject under consideration",
    "glib": "fluent but insincere and shallow",
    "grandiloquence": "pompous or extravagant in language, style, or manner, especially in a way that is intended to impress",
    "gratis": "free; without charge",
    "gratuitous": "uncalled for; lacking good reason; unwarranted",
    "gregarious": "sociable",
    "guile": "sly or cunning intelligence",
    "hackneyed": "overused; cliched",
    "halcyon": "calm; peaceful",
    "harangue": "a lengthy and aggressive speech",
    "harbinger": "a person or thing that announces or signals the approach of another",
    "hedonism": "the pursuit of pleasure; sensual self-indulgence",
    "hegemony": "leadership or dominance, especially by one country or social group over others",
    "hermetic": "(of a seal or closure) complete and airtight",
    "heretical": "holding an opinion at odds with what is generally accepted",
    "hubris": "excessive pride or self-confidence",
    "hyperbole": "exaggerated statements or claims not meant to be taken literally",
    "iconoclast": "one who attacks common beliefs or institutions",
    "idolatrous": "worshiping idols",
    "idyllic": "like an idyll; extremely happy, peaceful, or picturesque",
    "ignominy": "public shame or disgrace",
    "immutable": "unchanging over time or unable to be changed",
    "impassive": "not feeling or showing emotion",
    "impecunious": "having little or no money",
    "imperturbable": "unable to be upset or excited; calm",
    "impetuous": "acting or done quickly and without thought or care",
    "implacable": "unable to be placated",
    "impromptu": "done without being planned, organized, or rehearsed",
    "impugn": "to dispute the truth, validity, or honesty of (a statement or motive); call into question",
    "impunity": "exemption from punishment or freedom from the injurious consequences of an action",
    "inchoate": "not yet completed or fully developed; rudimentary",
    "incandescent": "emitting light as a result of being heated",
    "incipient": "in an initial stage; beginning to happen or develop",
    "incorrigible": "(of a person or their tendencies) not able to be corrected, improved, or reformed",
    "indifferent": "having no particular interest or sympathy; unconcerned",
    "indolent": "wanting to avoid activity or exertion; lazy",
    "indulgent": "having or indicating a tendency to be overly generous to or lenient with someone",

    "ineluctable": "unable to be resisted or avoided; inescapable",
    "inept": "having or showing no skill; clumsy",
    "inert": "lacking the ability or strength to move",
    "inexorable": "impossible to stop or prevent",
    "infelicitous": "unfortunate; inappropriate",
    "ingenuous": "innocent and unsuspecting",
    "inherent": "existing in something as a permanent, essential, or characteristic attribute",
    "inimical": "tending to obstruct or harm",
    "innocuous": "not harmful or offensive",
    "intractable": "hard to control or deal with",
    "intransigent": "unwilling or refusing to change one's views or to agree about something",
    "intrepid": "fearless; adventurous (often used for rhetorical or humorous effect)",
    "inundate": "to overwhelm (someone) with things or people to be dealt with",
    "inured": "accustomed to something, especially something unpleasant",
    "inveigle": "to persuade (someone) to do something by means of deception or flattery",
    "inveterate": "having a particular habit, activity, or interest that is long-established and unlikely to change",
    "irascible": "easily angered",
    "itinerant": "traveling from place to place",
    "judicious": "having, showing, or done with good judgment or sense",
    "laconic": "using few words",
    "lament": "a passionate expression of grief or sorrow",
    "largess": "generosity in bestowing money or gifts upon others",
    "lascivious": "(of a person, manner, or gesture) feeling or revealing an overt and often offensive sexual desire",
    "latent": "existing but not yet developed or manifest; hidden; concealed",
    "laud": "to praise highly",
    "levee": "an embankment built to prevent the overflow of a river",
    "levity": "humor or frivolity, especially the treatment of a serious matter with humor or in a manner lacking due to respect",
    "licentious": "promiscuous and unprincipled in sexual matters",
    "loquacious": "talkative",
    "lucid": "clear and easily understood",
    "luminous": "bright; brilliant; glowing",
    "magnanimity": "generosity",
    "magnate": "a wealthy and influential person, especially in business",
    "malevolent": "having or showing a wish to do evil to others",
    "malleable": "capable of being shaped",
    "manifest": "clear or obvious to the eye or mind",
    "martial": "warlike; relating to the military",
    "maudlin": "self-pityingly or tearfully sentimental, often through drunkenness",
    "maverick": "an independent-minded person",
    "maxim": "a short, pithy statement expressing a general truth or rule of conduct",
    "mendacity": "untruthfulness",
    "mendicant": "a beggar",
    "mercurial": "subject to sudden or unpredictable changes of mood or mind",
    "meticulous": "very careful and precise",
    "misanthrope": "a person who dislikes humankind and avoids human society",
    "mitigate": "to soften; to lessen",
    "mollify": "to calm or make less severe",
    "morose": "sullen and ill-tempered",
    "motility": "the ability of organisms and fluid to move or get around",
    "mundane": "dull",
    "nascent": "just coming into existence and beginning to display signs of future potential",
    "nebulous": "hazy; vague; uncertain",
    "neologism": "a newly coined word or expression",
    "neophyte": "a person who is new to a subject, skill, or belief",
    "noisome": "having an extremely offensive smell",
    "nominal": "(of a role or status) existing in name only",
    "novel": "new or unusual in an interesting way",
    "noxious": "harmful; poisonous; lethal",
    "obdurate": "stubbornly refusing to change one's opinion or course of action",
    "obfuscate": "to render obscure, unclear, or unintelligible",
    "oblique": "not explicit or direct in addressing a point",
    "obsequious": "overly submissive and eager to please",
    "obstinate": "stubbornly refusing to change one's opinion or chosen course of action, despite attempts to persuade one to do so",
    "obtuse": "mentally dull",
    "obviate": "to remove (a need or difficulty)",
    "occlude": "to stop, close up, or obstruct",
    "odious": "extremely unpleasant; repulsive",
    "onerous": "involving a great deal of effort, trouble, or difficulty",
    "opaque": "not able to be seen through; not transparent",
    "opprobrium": "harsh criticism or censure",
    "oscillation": "movement back and forth at a regular speed",
    "ostentatious": "characterized by vulgar or pretentious display; designed to impress or attract notice",
    "paean": "a song of praise or triumph",
    "palliate": "to make (a disease or its symptoms) less severe or unpleasant without removing the cause",
    "panacea": "a solution or remedy for all difficulties or diseases",
    "paradigm": "a typical example or pattern of something; a model",
    "paradox": "a seemingly absurd or self-contradictory statement or proposition that when investigated or explained may prove to be well founded or true",
    "parody": "a humorous imitation",
    "parsimonious": "unwilling to spend money or use resources; stingy or frugal",
    "partisan": "a strong supporter of a party, cause, or person",
    "patina": "a green or brown film on the surface of bronze or similar metals, produced by oxidation over a long period",
    "paucity": "the presence of something only in small or insufficient quantities or amounts; scarcity",
    "pedagogy": "the method and practice of teaching, especially as an academic subject or theoretical concept",
    "pedantic": "excessively concerned with minor details or rules; overscrupulous",
    "pedestrian": "lacking inspiration or excitement; dull",
    "penurious": "extremely poor; poverty-stricken",
    "penury": "extreme poverty",
    "perennial": "lasting for a long time",
    "perfidy": "treachery; deceitfulness",
    "perfunctory": "done without care; in a routine fashion",
    "pernicious": "having a harmful effect, especially in a gradual or subtle way",
    "perspicacious": "keenly observant; perceptive",
    "peruse": "to read carefully",
    "pervade": "to spread through and be perceived in every part of",
    "pervasive": "spreading widely throughout an area or a group of people",
    "phlegmatic": "(of a person) having an unemotional and stolidly calm disposition",
    "pine": "to yearn for",
    "pious": "devoutly religious",
    "pirate": "to use or reproduce (another's work) for profit without permission, usually in contravention of patent or copyright",
    "pith": "the essential or central part",
    "pithy": "concise and forcefully expressive",
    "placate": "to make (someone) less angry or hostile",
    "platitude": "a remark or statement, especially one with a moral content, that has been used too often to be interesting or thoughtful",
    "plethora": "a large or excessive amount of (something)",
    "plummet": "to fall or drop straight down at high speed",
    "polemical": "controversial; argumentative",
    "pragmatic": "dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations",
    "prattle": "to talk in an aimless, foolish, or trivial way; to babble",
    "precipitate": "to cause (an event or situation, typically one that is bad or undesirable) to happen suddenly, unexpectedly, or prematurely",
    "precursor": "a person or thing that comes before another of the same kind; a forerunner",
    "predilection": "a preference or special liking for something; a bias in favor of something",
    "preen": "to dress or groom with elaborate care",
    "prescience": "the fact of knowing something before it takes place; foreknowledge",
    "presumptuous": "(of a person or their behavior) failing to observe the limits of what is permitted or appropriate",
    "prevaricate": "to speak or act in an evasive way",
    "pristine": "in its original condition; unspoiled",
    "probity": "the quality of having strong moral principles; honesty and decency",
    "proclivity": "a tendency to choose or do something regularly; an inclination or predisposition toward a particular thing",
    "prodigal": "wastefully extravagant",
    "prodigious": "remarkably or impressively great in extent, size, or degree",
    "profligate": "recklessly extravagant or wasteful in the use of resources",
    "profuse": "very plentiful; abundant",
    "proliferate": "to increase in number quickly",
    "prolific": "producing much fruit or foliage or many offspring",
    "propensity": "an inclination or natural tendency to behave in a particular way",
    "prosaic": "dull; lacking in distinction and originality",
    "pungent": "having a sharply strong taste or smell",
    "putative": "generally considered or reputed to be",
    "putrefy": "to rot; to decay and give off a foul odor",
    "quaff": "to drink deeply",
    "qualms": "uneasy feelings of doubt, worry, or fear, especially about one's own conduct; a misgiving",
    "querulous": "complaining in a petulant or whining manner",
    "queue": "a line or sequence of people or vehicles awaiting their turn to be attended to or to proceed",
    "quiescence": "a state of inactivity or dormancy",
    "quintessential": "representing the most perfect or typical example of a quality or class",
    "quixotic": "exceedingly idealistic; unrealistic and impractical",
    "quotidian": "of or occurring every day; daily",
    "rampart": "a defensive wall of a castle or walled city, having a broad top with a walkway and typically a stone parapet",
    "rancorous": "characterized by bitterness or resentment",
    "rarefy": "to make thinner or sparser",
    "recant": "to say that one no longer holds an opinion or belief, especially one considered heretical",
    "recalcitrant": "stubbornly disobedient; resisting authority",
    "recondite": "little known; abstruse",
    "redolent": "strongly reminiscent or suggestive of (something)",
    "redoubtable": "formidable, especially as an opponent",
    "refulgent": "shining brightly",
    "refute": "to prove to be false",
    "relegate": "to consign to an inferior position",
    "remonstrate": "to make a forcefully reproachful protest",
    "remuneration": "money paid for work or a service",
    "renaissance": "a revival of or renewed interest in something",
    "renege": "to go back on a promise, undertaking, or contract",
    "replete": "filled or well-supplied with something",
    "reproach": "to address (someone) in such a way as to express disapproval or disappointment",
    "reprobate": "an unprincipled person (often used humorously or affectionately)",
    "reprove": "to reprimand or censure (someone)",
    "repudiate": "to refuse to accept or be associated with",
    "rescind": "to revoke, cancel, or repeal (a law, order, or agreement)",
    "respite": "a short period of rest or relief from something difficult or unpleasant",
    "reticent": "not revealing one's thoughts or feelings readily",
    "reverent": "feeling or showing deep and solemn respect",
    "rhetoric": "the art of effective or persuasive speaking or writing, especially the use of figures of speech and other compositional techniques",
    "ribald": "referring to sexual matters in an amusingly coarse or irreverent way",
    "sagacious": "having or showing keen mental discernment and good judgment; shrewd",
    "sagacity": "the quality of being sagacious",
    "sage": "a profoundly wise man, especially one who features in ancient history or legend",
    "salient": "most noticeable or important",
    "salubrious": "health-giving; healthy",
    "salutary": "(especially with reference to something unwelcome or unpleasant) producing good effects; beneficial",
    "sanction": "to give official permission or approval for (an action)",
    "sanguine": "optimistic or positive, especially in an apparently bad or difficult situation",
    "satire": "the use of humor, irony, exaggeration, or ridicule to expose and criticize people's stupidity or vices, particularly in the context of contemporary politics and other topical issues",
    "sedulous": "(of a person or action) showing dedication and diligence",
    "shard": "a piece of broken ceramic, metal, glass, or rock, typically having sharp edges",
    "solicitous": "characterized by or showing interest or concern",
    "solvent": "having assets in excess of liabilities; able to pay one's debts",
    "soporific": "tending to induce drowsiness or sleep",
    "sordid": "involving ignoble actions and motives; arousing moral distaste and contempt",
    "sparse": "thinly dispersed or scattered",
    "specious": "superficially plausible, but actually wrong",
    "spendthrift": "a person who spends money in an extravagant, irresponsible way",
    "sporadic": "occurring at irregular intervals or only in a few places; scattered or isolated",
    "spurious": "not being what it purports to be; false or fake",
    "squalid": "extremely dirty and unpleasant, especially as a result of poverty or neglect",
    "squander": "to waste (something, especially money or time) in a reckless and foolish manner",
    "static": "lacking in movement, action, or change, especially in a way viewed as undesirable or uninteresting",
    "stoic": "a person who can endure pain or hardship without showing their feelings or complaining",
    "stupefy": "to make (someone) unable to think or feel properly",
    "stymie": "to prevent or hinder the progress of",
    "subpoena": "a writ ordering a person to attend a court",
    "subtle": "(especially of a change or distinction) so delicate or precise as to be difficult to analyze or describe",
    "succinct": "(especially of something written or spoken) briefly and clearly expressed",
    "superfluous": "unnecessary, especially through being more than enough",
    "supplant": "to supersede and replace",
    "surfeit": "an excessive amount of something",
    "surreptitious": "kept secret, especially because it would not be approved of",
    "sycophant": "a person who acts obsequiously toward someone important in order to gain advantage",
    "synthesis": "the combination of ideas to form a theory or system",
    "tacit": "understood or implied without being stated",
    "taciturn": "(of a person) reserved or uncommunicative in speech; saying little",
    "temerity": "excessive confidence or boldness; audacity",
    "tenacity": "the quality or fact of being able to grip something firmly; grip",
    "tenuous": "very weak or slight",
    "terse": "sparing in the use of words; abrupt",
    "tirade": "a long, angry speech of criticism or accusation",
    "torpid": "mentally or physically inactive; lethargic",
    "torque": "a twisting force that tends to cause rotation",
    "tortuous": "full of twists and turns",
    "tout": "to attempt to sell (something), typically by pestering people in an aggressive or bold manner",
    "transient": "lasting only for a short time; impermanent",
    "trenchant": "vigorous or incisive in expression or style",
    "truculent": "eager or quick to argue or fight; aggressively defiant",
    "turpitude": "depravity; wickedness",
    "ubiquitous": "present, appearing, or found everywhere",
    "unalloyed": "(of metal) not alloyed; pure",
    "unfeigned": "genuine; sincere",
    "untenable": "(of a position or view) not able to be maintained or defended against attack or objection",
    "urbane": "suave, courteous, and refined in manner",
    "usury": "the illegal action or practice of lending money at unreasonably high rates of interest",
    "vacillate": "to alternate or waver between different opinions or actions; be indecisive",
    "variegated": "exhibiting different colors, especially as irregular patches or streaks",
    "venal": "showing or motivated by susceptibility to bribery",
    "veracity": "conformity to facts; accuracy",
    "verdant": "(of countryside) green with grass or other rich vegetation",
    "vestige": "a trace of something that is disappearing or no longer exists",
    "vexation": "the state of being annoyed, frustrated, or worried",
    "vigilant": "keeping careful watch for possible danger or difficulties",
    "vilify": "to speak or write about in an abusively disparaging manner",
    "virulent": "(of a disease or poison) extremely severe or harmful in its effects",
    "viscous": "having a thick, sticky consistency between solid and liquid",
    "vitiate": "to spoil or impair the quality or efficiency of",
    "vituperate": "to blame or insult (someone) in strong or violent language",
    "volatile": "liable to change rapidly and unpredictably, especially for the worse",
    "voracious": "wanting or devouring great quantities of food",
    "waver": "to shake with a quivering motion",
    "wizened": "shriveled or wrinkled with age",
    "zealous": "having or showing zeal"
};





        let gameState;

        function initializeState() {
            gameState = {
                currentWord: '',
                studyMode: 'random',
                streak: 0,
                sessionCount: 0,
                totalAttempts: 0,
                correctAttempts: 0,
                masteredWords: new Set(),
                wordDifficulty: new Map(),
                reviewQueue: [],
                confidenceHistory: [],
                displayHistory: [],
                displayIndex: -1,
                words: Object.keys(vocabularyData)
            };
        }

        function showCard(word) {
            const card = document.getElementById('current-card');
            gameState.currentWord = word;
            
            if (word) {
                document.getElementById('current-word').textContent = word;
                document.getElementById('current-definition').textContent = vocabularyData[word];
            } else {
                document.getElementById('current-word').textContent = 'No more words!';
                document.getElementById('current-definition').textContent = 'You have seen all available words in this mode.';
            }
            
            card.classList.remove('flipped');
            updateNavButtons();
        }
        
        function getRandomWord() {
            let availableWords;
            
            if (gameState.studyMode === 'difficult') {
                const hardWords = gameState.words.filter(word => 
                    gameState.wordDifficulty.get(word) === 'hard' && !gameState.masteredWords.has(word)
                );
                availableWords = hardWords.length > 0 ? hardWords : [];
            } else if (gameState.studyMode === 'review') {
                if (gameState.reviewQueue.length === 0) {
                     // Get the 20 most recent hard words that aren't mastered
                    gameState.reviewQueue = [...new Set(gameState.confidenceHistory
                        .filter(item => item.confidence === 'hard' && !gameState.masteredWords.has(item.word))
                        .map(item => item.word)
                        .reverse()
                    )].slice(0, 20);
                }
                availableWords = gameState.reviewQueue;
            } else { // Random mode
                availableWords = gameState.words.filter(word => !gameState.masteredWords.has(word));
            }
            
            if (availableWords.length === 0) return null;
            return availableWords[Math.floor(Math.random() * availableWords.length)];
        }

        function getNextCard() {
            gameState.displayIndex++;
            let word;

            if (gameState.displayIndex < gameState.displayHistory.length) {
                word = gameState.displayHistory[gameState.displayIndex];
            } else {
                word = getRandomWord();
                if (word) {
                    gameState.displayHistory.push(word);
                } else {
                     // We're at the end and no new words are available
                    gameState.displayIndex--; // prevent index from going out of bounds
                }
            }
            showCard(word);
        }

        function getPrevCard() {
            if (gameState.displayIndex > 0) {
                gameState.displayIndex--;
                const word = gameState.displayHistory[gameState.displayIndex];
                showCard(word);
            }
        }
        
        function handleConfidence(confidence) {
            if (!gameState.currentWord) return;

            gameState.totalAttempts++;
            gameState.sessionCount++;
            
            if (confidence === 'easy' || confidence === 'medium') {
                gameState.correctAttempts++;
                gameState.streak++;
                if (confidence === 'easy') {
                    gameState.masteredWords.add(gameState.currentWord);
                }
            } else { // Hard
                gameState.streak = 0;
            }
            
            gameState.wordDifficulty.set(gameState.currentWord, confidence);
            gameState.confidenceHistory.push({ word: gameState.currentWord, confidence: confidence });
            
            updateStats();
            setTimeout(getNextCard, 300);
        }

        function updateNavButtons() {
            document.getElementById('prev-btn').disabled = gameState.displayIndex <= 0;
        }

        function updateStats() {
            document.getElementById('streak-count').textContent = gameState.streak;
            document.getElementById('session-count').textContent = gameState.sessionCount;
            document.getElementById('mastered-count').textContent = gameState.masteredWords.size;
            
            const accuracy = gameState.totalAttempts > 0 
                ? Math.round((gameState.correctAttempts / gameState.totalAttempts) * 100)
                : 0;
            document.getElementById('accuracy').textContent = `${accuracy}%`;
            
            const progressPercent = (gameState.masteredWords.size / gameState.words.length) * 100;
            document.getElementById('progress-fill').style.width = `${progressPercent}%`;
        }

        function resetProgress() {
            if (confirm('Are you sure you want to reset all progress?')) {
                initializeState();
                updateStats();
                document.querySelectorAll('.control-btn').forEach(b => b.classList.remove('active'));
                document.querySelector('.control-btn[data-mode="random"]').classList.add('active');
                getNextCard();
            }
        }

        // --- Event listeners ---
        document.getElementById('flip-btn').addEventListener('click', () => {
            document.getElementById('current-card').classList.toggle('flipped');
        });

        document.getElementById('current-card').addEventListener('click', (e) => {
            if (!e.target.closest('.confidence-buttons')) {
                document.getElementById('current-card').classList.toggle('flipped');
            }
        });

        document.getElementById('next-btn').addEventListener('click', getNextCard);
        document.getElementById('prev-btn').addEventListener('click', getPrevCard);
        document.getElementById('reset-btn').addEventListener('click', resetProgress);

        document.querySelectorAll('.confidence-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleConfidence(e.target.dataset.confidence);
            });
        });

        document.querySelectorAll('.control-btn[data-mode]').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.control-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                gameState.studyMode = btn.dataset.mode;
                // Get a new card immediately when mode changes
                // Reset display history for a fresh start in the new mode
                gameState.displayHistory = [];
                gameState.displayIndex = -1;
                getNextCard();
            });
        });

        // --- Initialize ---
        initializeState();
        getNextCard();
    });
