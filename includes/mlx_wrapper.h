/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   mlx_wrapper.h                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: rguigneb <rguigneb@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/12/05 12:33:15 by rguigneb          #+#    #+#             */
/*   Updated: 2025/01/17 10:01:34 by rguigneb         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef MLX_WRAPPER_H

# define MLX_WRAPPER_H

# define HEIGHT 700
# define WIDTH 900

typedef struct s_mlx
{
	void	*mlx;
	void	*win;
	int		height;
	int		width;
}			t_mlx;

typedef struct s_img_data
{
	int		line_bytes;
	int		pixel_bits;
	int		endian;
}			t_img_data;

// -----------------------------------------
//
//    Main Section
//
// -----------------------------------------

t_mlx		*get_mlx_vars(void);
void		free_all(void);

#endif
