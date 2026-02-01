import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function User() {  
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")

    const dataHandel = async () => {
        try {
            setLoading(true)
            const getUser = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(getUser.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        dataHandel()
    }, [])

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="loading-spinner mx-auto mb-4"></div>
                    <p className="text-muted">Loading users...</p>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-gray-50'>
            
            {/* Header */}
            <section className="bg-white border-b border-gray-200">
                <div className="container py-8">
                    <div className="text-center mb-8">
                        <h1 className="heading-xl mb-4">Our Community</h1>
                        <p className="text-muted mb-8">
                            Meet amazing people from around the world
                        </p>

                        {/* Search */}
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Results count */}
                    <div className="text-center">
                        <p className="text-subtle">
                            Showing {filteredUsers.length} of {users.length} users
                        </p>
                    </div>
                </div>
            </section>

            {/* Users Grid */}
            <section className="section">
                <div className="container">
                    {filteredUsers.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {filteredUsers.map((user) => (
                                <div key={user.id} className='user-card'>
                                    
                                    {/* Avatar */}
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${user.name}&background=f3f4f6&color=374151&size=64`}
                                        alt={user.name}
                                        className="user-avatar"
                                    />
                                    
                                    <h3 className='user-name'>{user.name}</h3>
                                    <p className="user-username">@{user.username}</p>

                                    {/* User Info */}
                                    <div className="user-info">
                                        <div className="user-info-item">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span className="truncate">{user.email}</span>
                                        </div>
                                        
                                        <div className="user-info-item">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span>{user.phone}</span>
                                        </div>
                                        
                                        <div className="user-info-item">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                                            </svg>
                                            <span className="text-blue-600">{user.website}</span>
                                        </div>

                                        <div className="user-info-item">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{user.address?.city}</span>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <Link
                                        to={`/users/${user.id}`}
                                        className='btn-ghost mt-4 w-full'
                                    >
                                        View Profile
                                    </Link>

                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">👥</div>
                            <h3 className="heading-md mb-2">No users found</h3>
                            <p className="text-muted">Try adjusting your search terms</p>
                        </div>
                    )}
                </div>
            </section>

        </div>
    )
}

export default User