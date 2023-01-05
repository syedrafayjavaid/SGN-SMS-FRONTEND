import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import UserDetai from 'pages/user/UserDetail';


// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const User = Loadable(lazy(() => import('pages/user/index')));
const Students = Loadable(lazy(() => import('pages/user/Students')));
const Teachers = Loadable(lazy(() => import('pages/user/Teachers')));
const RegisterTeacher = Loadable(lazy(() => import('pages/user/Teachers/RegisterTeacher')));
const EditTeacher = Loadable(lazy(() => import('pages/user/Teachers/EditTeacher')));
const Parents = Loadable(lazy(() => import('pages/user/parents')));
const RegisterParent = Loadable(lazy(() => import('pages/user/parents/RegisterParent')));
const UserDetail = Loadable(lazy(() => import('pages/user/UserDetail')));
const EditParent = Loadable(lazy(() => import('pages/user/parents/EditParent')));
const RegisterStudent = Loadable(lazy(() => import('pages/user/Students/RegisterStudent')));
const EditStudent = Loadable(lazy(() => import('pages/user/Students/EditStudent')));

// courses imports
const Courses = Loadable(lazy(() => import('pages/course')));
const CourseCreate = Loadable(lazy(() => import('pages/course/CreateCourse')));
const CourseDetail = Loadable(lazy(() => import('pages/course/CourseDetail')));
const CourseEdit = Loadable(lazy(() => import('pages/course/EditCourse')));

// Classes imports
const Classes = Loadable(lazy(() => import('pages/class')));
const CreateClass = Loadable(lazy(() => import('pages/class/CreateClass')));
const ClassDetail = Loadable(lazy(() => import('pages/class/ClassDetail')));
const ClassEdit = Loadable(lazy(() => import('pages/class/EditClass')));

// Classes imports
const Admissions = Loadable(lazy(() => import('pages/admission')));
const AdmissionCreate = Loadable(lazy(() => import('pages/admission/AdmissionCreate')));
const AdmissionDetail = Loadable(lazy(() => import('pages/admission/AdmissionDetail')));
const AdmissionEdit = Loadable(lazy(() => import('pages/admission/AdmissionEdit')));




const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'users',
            children: [
                {
                    path: 'main',
                    element: <User />
                },
                {
                    path: 'students',
                    children: [
                        {
                            path: "",
                            element: < Students />
                        },
                        {
                            path: "register",
                            element: < RegisterStudent />
                        },
                        {
                            path: "edit",
                            element: < EditStudent />
                        },
                        {
                            path: "detail",
                            element: < UserDetail />
                        },

                    ]
                },
                {
                    path: 'parents',
                    children: [
                        {
                            path: "",
                            element: < Parents />
                        },
                        {
                            path: "register",
                            element: < RegisterParent />
                        },
                        {
                            path: "edit",
                            element: < EditParent />
                        },
                        {
                            path: "detail",
                            element: < UserDetail />
                        }

                    ]
                },
                {
                    path: 'teachers',
                    children: [
                        {
                            path: "",
                            element: < Teachers />
                        },
                        {
                            path: "register",
                            element: < RegisterTeacher />
                        },
                        {
                            path: "edit",
                            element: < EditTeacher />
                        },
                        {
                            path: "detail",
                            element: < UserDetail />
                        },

                    ]
                }
            ]

        },
        {
            path: 'courses',
            children: [
                {
                    path: '',
                    element: <Courses />
                }
                ,
                {
                    path: 'create',
                    element: <CourseCreate />
                }
                ,
                {
                    path: 'detail',
                    element: <CourseDetail />
                }
                ,
                {
                    path: 'edit',
                    element: <CourseEdit />
                }
            ]
        },
        {
            path: 'classes',
            children: [
                {
                    path: '',
                    element: <Classes />
                }
                ,
                {
                    path: 'create',
                    element: <CreateClass />
                }
                ,
                {
                    path: 'detail',
                    element: <ClassDetail />
                }
                ,
                {
                    path: 'edit',
                    element: <ClassEdit />
                }
            ]
        },
        {
            path: 'admissions',
            children: [
                {
                    path: '',
                    element: <Admissions />
                }
                ,
                {
                    path: 'create',
                    element: <AdmissionCreate />
                }
                ,
                {
                    path: 'detail',
                    element: <AdmissionDetail />
                }
                ,
                {
                    path: 'edit',
                    element: <AdmissionEdit />
                }
            ]
        },
        // {
        //     path: 'videocall',
        //     element: <Videocall />
        // },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutes;
