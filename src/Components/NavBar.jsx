import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
   
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  // import { BsFillBagCheckFill } from "react-icons/bs";
  // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  // import {  faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
  import logos from "../images/logos.png"
  import {Link} from "react-router-dom"
  import {AiOutlineHeart} from 'react-icons/ai'
  import {FaRegUser} from 'react-icons/fa' 
  import {CiShoppingCart} from 'react-icons/ci'
  import { useContext } from 'react';
  import { AuthContext } from '../ContextApi/AuthContextProvider';
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
   const {setquery ,isauth ,arr ,setisauth} = useContext(AuthContext)
    return (
      <Box >
        <Flex
            padding="20px"
            position={"fixed"}
            top="40px"
            width="100%"
            zIndex={"999"}
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <Link to={"/"}><img style={{ borderRadius:"50%"}}  src={logos} alt="logo" width="80px" height="50px"/></Link>
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
           <Box>
  
           <Input onChange={(e) => setquery(e.target.value)} type={"text"} placeholder={`SEARCH                      🔍`} borderRadius="20px"></Input>
           </Box>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
             alignItems="center"
            >
            
          <Link to={'/login'} alignItems="center" >
          <Button
          marginTop="5px"
              as={'a'}
              fontSize={'xl'}
              fontWeight={400}
              variant={'link'}
              to={'/login'}
               alignItems="center"
              >
            { isauth ?<Button _hover={{bg:"white"}} backgroundColor={"white"} onClick={() => setisauth(!isauth) } color={"red"} marginLeft={2} fontWeight="bold" isD>vivek</Button> : <FaRegUser/> }
            
            </Button>
          </Link>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'xl'}
              fontWeight={600}
              color={'black'}
              bg={"white"}
              href={'#'}
              _hover={{
                bg: '#e11b23',
                color:"white"
              }}>
               
               <AiOutlineHeart/>
            </Button>
           <Link to={"/cart"} alignItems="center">
           <Button
              as={'a'}
              fontSize={'xl'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
             <CiShoppingCart/>
             <span style={{marginBottom:"20px", color:"red",borderRadius:"60%" }}>{arr.length? arr.length:null}</span>
            </Button>
           </Link>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack style={{  alignItems:"center"}} direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  to={navItem.href}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        to={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('#e11b23', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: '#e11b23' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  const NAV_ITEMS= [
    {
      label: 'TOP WEAR',
      children: [
        {
          label: 'T-Shirt',
          
          href: '#',
        },
        {
          label: 'Oversized T-shirt',
          
          href: '#',
        },
        {
          label: 'Oversized Full Sleeves T-shirt ',
          
          href: '#',
        },
        {
          label: 'Full Sleeves T-shirt ',
          
          href: '#',
        },
        {
          label: 'Shirt',
          
          href: '#',
        },
        {
          label: 'Polos',
          
          href: '#',
        },
        {
          label: 'Hoodies Jackets',
          
          href: '#',
        },
        {
          label: 'SweatShirt  Sweaters',
          
          href: '#',
        },
        {
          label: 'Co-ord Sets',
          
          href: '#',
        },
        {
          label: 'Drop-cut T-Shirt',
          
          href: '#',
        },
        {
          label: 'Graphics Oversized T-shirt',
          
          href: '#',
        },
        
      ],
    },
  
    {
      label: 'BOTTOMWEAR',
      children: [
        {
          label: 'Joggers',
          
          href: '#',
        },
        {
          label: 'Freestyle Leggings ',
          
          href: '#',
        },
        {
          label: 'Innerwear ',
          
          href: '#',
        },
        {
          label: 'Shorts',
          
          href: '#',
        },
        {
          label: 'All Days Pants',
          
          href: '#',
        },
        {
          label: 'Pajamas',
          
          href: '#',
        }
        
      ],
  
    },
  
    {
      label: 'CATEGORY',
      children: [
        {
          label: 'Mens',
          subLabel: 'Shop By Mens Category',
          href: '/mens',
        },
        {
          label: 'Womens',
          subLabel: 'Shop By Womens Category',
          href: '/womens',
        },
        {
          label: 'Kids',
          subLabel: 'Shop By Kids Category',
          href: '/kids',
        },
      ],
    },
    {
      label: 'COLLECTIONS',
      children: [
        {
          label: 'New Arrivals',
          
          href: '#',
        },
        {
          label: 'Active Wears',
          
          href: '#',
        },
        {
          label: 'Best Sellers',
          
          href: '#',
        },
        {
          label: 'Hottest Deals',
          
          href: '#',
        },
        
      ],
  
    },
    {
      label: 'ACCESSORIES',
      children: [
        {
          label: 'Footwear',
          
          href: '#',
        },
        {
          label: 'Perfume',
          
          href: '#',
        },
        {
          label: 'BackPacks',
          
          href: '#',
        },
        {
          label: 'Shocks',
          
          href: '#',
        },
        {
          label: 'All Days Pants',
          
          href: '#',
        },
        {
          label: 'Pajamas',
          
          href: '#',
        }
        
      ],
  
    },
    
    {
      label: 'MEMBERSHIP',
      
  
    },
  ];